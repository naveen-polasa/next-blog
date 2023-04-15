"use client";
import { ReactNode, useContext, useReducer, useState } from "react";
import { createContext } from "react";

type UseCartReducerType = {
  Add: (payload: ResType) => void;
  cartItems: ResType[];
  count: number;
};

const initContextType: UseCartReducerType = {
  Add: () => {},
  cartItems: [],
  count: 0,
};

type ActionType = {
  type: "Add";
  payload: ResType;
};

function reducer(state: UseCartReducerType, action: ActionType) {
  switch (action.type) {
    case "Add":
      return { ...state, cartItems: [action.payload, ...state.cartItems] };
    default:
      throw new Error();
  }
}

const useCartReducer = () => {
  const [state, dispatch] = useReducer(reducer, initContextType);
  const Add = (payload: ResType) => {
    dispatch({ type: "Add", payload });
  };
  return { ...state, Add };
};

const CartContext = createContext<UseCartReducerType>(initContextType);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider value={useCartReducer()}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default ContextProvider;
