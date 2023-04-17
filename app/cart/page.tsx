"use client";
import Link from "next/link";
import { useCartContext } from "../context";
import CartDetails from "../components/CartDetails";

const Cart = () => {
  const { cartItems, count } = useCartContext();
  if (cartItems.length < 1) {
    return (
      <div className="pt-44 text-center py-4 min-h-[calc(100vh-9rem)]">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <Link href="/products">
          <button className="py-2 px-6 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl">
            Shop Now
          </button>
        </Link>
      </div>
    );
  }
  return (
    <main className="min-h-[calc(100vh-9rem)]">
      <div> <CartDetails /></div>
    </main>
  );
};
export default Cart;
