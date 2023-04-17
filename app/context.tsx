"use client";
import { ReactNode, useContext, useReducer, useState } from "react";
import { createContext } from "react";

type StateType = {
  count: number;
  cartItems: ResType[] | [];
};

const initState: StateType = {
  count: 0,
  cartItems: JSON.parse(localStorage.getItem("nextCart")!) || [],
};

type ActionType1 = {
  type: "ADD" | "DEC" | "INC" | "REM" | "CLEAR";
  payload: ResType | number;
};

type ActionType2 = {
  type: "ADD" | "DEC" | "INC" | "REM" | "CLEAR";
  payload: number;
};

type ActionType = ActionType1 | ActionType2;

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "ADD": {
      const isThere = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      let newItems;
      if (isThere) {
        newItems = state.cartItems.filter((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
      }
      if (!isThere) {
        newItems = [action.payload, ...state.cartItems];
      }
      localStorage.setItem("nextCart", JSON.stringify(newItems));
      return { ...state, cartItems: newItems };
    }
    case "DEC": {
      const newCartItems = state.cartItems.filter((item) => {
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
    case "REM": {
      const newItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cartItems: newItems };
    }
    case "CLEAR": {
      return { ...state, cartItems: [] };
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
  const Remove = (payload: number) => {
    dispatch({ type: "REM", payload });
  };
  const Clear = () => {
    dispatch({ type: "CLEAR" });
  };
  return { ...state, Add, Increase, Decrease, Clear, Remove };
};

type UseCartContextType = ReturnType<typeof UseCartContext>;

const initContextType: UseCartContextType = {
  Add: () => {},
  Increase: () => {},
  Decrease: () => {},
  Clear: () => {},
  Remove: () => {},
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
