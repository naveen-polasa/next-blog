"use client";

import { FaTrash } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context";

const CartItem = ({ id, image, title, price, quantity: amount }: ResType) => {
  const { Increase, Decrease, Remove } = useCartContext();
  return (
    <div className="flex items-center justify-between md:justify-around px-5 py-2 my-3 mx-9 border rounded-xl">
      <div className="flex gap-x-4 m-3 items-center w-64 ">
        <img src={image} alt={title} className="rounded-xl w-16 h-16" />
        <div>
          <h5 className="capitalize font-semibold">{title}</h5>
          <h5 className="font-semibold"> {price}</h5>
        </div>
      </div>
      <AmountButtons
        amount={amount}
        increase={() => Increase(id)}
        decrease={() => Decrease(id)}
      />
      <h5 className="font-semibold hidden md:flex">{price * amount!}</h5>
      <button
        className="text-red-600 hidden sm:flex"
        onClick={() => Remove(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
};
export default CartItem;
