"use client";

import Link from "next/link";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context";

type ProdType = {
  product: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: object;
    title: string;
  };
};

const AddToCart = ({ product }: ProdType) => {
  const [amount, setAmount] = useState(1);
  const decrease = () => (amount === 1 ? setAmount(1) : setAmount(amount - 1));
  const increase = () => setAmount(amount + 1);
  const { Add } = useCartContext();
  return (
    <section>
      <div className="flex gap-x-5">
        <div className="py-3 flex flex-col gap-2">
          <AmountButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
          <Link href="/cart">
            <button
              type="submit"
              className="py-1.5 px-4 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-xl"
              onClick={() => Add({ ...product, quantity: amount })}
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AddToCart;
