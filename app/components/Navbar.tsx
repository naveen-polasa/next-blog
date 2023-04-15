"use client";

import Link from "next/link";
import { useCartContext } from "../context";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useCartContext();
  return (
    <nav className="py-2 h-[70px] border-b sticky top-0 bg-white z-20">
      <div className="flex justify-between px-5 max-w-7xl mx-auto">
        <Link href="/" className="shrink-0">
          {/* <img src={logo} alt="logo" className="hidden sm:flex w-24 md:w-32" /> */}
          <p className="capitalize px-6 text-xl md:text-2xl font-mono">.Cart</p>
        </Link>
        <div className="flex items-center gap-x-4 text-lg md:gap-x-12 capitalize px-6 md:text-xl font-mono">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="flex gap-x-6 items-center">
          <Link
            href="/cart"
            className="flex gap-2 items-center  font-semibold "
          >
            <span className="text-xl"> Cart </span>
            <span className="relative">
              <FaShoppingCart size="24px" />
              <span className="absolute -top-3 -right-3 bg-yellow-400 rounded-full px-1.5">
                {cartItems.reduce((acc, cur) => {
                  return acc + cur.quantity!;
                }, 0)}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
