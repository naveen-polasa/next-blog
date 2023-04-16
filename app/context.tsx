"use client";
import { ReactNode, useContext, useReducer, useState } from "react";
import { createContext } from "react";

// type UseCartReducerType = {
//   Add: (payload: ResType) => void;
//   Increase: (payload: ResType) => void;
//   Decrease: (payload: ResType) => void;
//   cartItems: ResType[];
//   count: number;
// };

type StateType = {
  count: number;
  cartItems: ResType[];
};

const initState: StateType = {
  count: 0,
  cartItems: [] || JSON.parse(localStorage.getItem("nextCart")!),
};

type ActionType = {
  type: "ADD" | "DEC" | "INC";
  payload: ResType | number;
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "ADD": {
      return { ...state, cartItems: [action.payload, ...state.cartItems] };
    }
    case "DEC": {
      console.log(action);
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity! -= 1;
          if (item.quantity === 0) {
            return;
          }
          return item;
        }
        return item;
      });
      localStorage.setItem("nextCart", JSON.stringify(newCartItems));
      return { ...state, cartItems: newCartItems };
    }
    case "INC": {
      console.log(action);
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity! += 1;
          return item;
        }
        return item;
      });
      localStorage.setItem("nextCart", JSON.stringify(newCartItems));
      return { ...state, cartItems: newCartItems };
    }
    default:
      throw new Error();
  }
}

const UseCartContext = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const Add = (payload: ResType) => {
    dispatch({ type: "ADD", payload });
  };
  const Increase = (payload: number) => {
    dispatch({ type: "INC", payload });
  };
  const Decrease = (payload: number) => {
    dispatch({ type: "DEC", payload });
  };
  return { ...state, Add, Increase, Decrease };
};

type UseCartContextType = ReturnType<typeof UseCartContext>;

const initContextType: UseCartContextType = {
  Add: () => {},
  Increase: () => {},
  Decrease: () => {},
  cartItems: [] || JSON.parse(localStorage.getItem("nextCart")!),
  count: 0,
};

const CartContext = createContext<UseCartContextType>(initContextType);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider value={UseCartContext()}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default ContextProvider;
