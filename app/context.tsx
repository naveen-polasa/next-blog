// "use client";
import { createContext } from "vm";

type StateType = {
  count: number;
  //   cartItems: object[];
};

const defaultState: StateType = {
  count: 1,
  //   cartItems: [],
};

const CartContext = createContext();
