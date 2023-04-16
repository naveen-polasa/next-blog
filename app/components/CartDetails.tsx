"use client";

import Link from "next/link";
import { useCartContext } from "../context";
import CartItem from "./CartItem";

const CartDetails = () => {
  const { cartItems } = useCartContext();
  return (
    <div className="px-5 py-6 max-w-7xl mx-auto">
      <div className="flex justify-between mx-6 px-4">
        <Link href="/products">
          <button className="py-2 px-4 my-2 text-md border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl">
            Continue Shopping
          </button>
        </Link>
        <button
          type="button"
          //   onClick={() => dispatch(clearCart())}
          className="py-2 px-4 my-2 text-md border border-red-500 hover:scale-105 duration-300 text-white bg-red-400 rounded-2xl"
        >
          Clear Cart
        </button>
      </div>
      {cartItems.map((item: ResType) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <article className="px-5 py-4 my-3 mx-9  border rounded-xl">
        <div className="flex justify-between">
          <h4 className="font-semibold text-2xl">Order Total :</h4>
          <span className="font-mono text-2xl mr-10">
            {(
              cartItems.reduce((acc, cur) => {
                return (acc += cur.quantity! * cur.price);
              }, 0)
            )}
          </span>
        </div>
      </article>
    </div>
  );
};
export default CartDetails;
