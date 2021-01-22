import React, { createContext, useReducer } from 'react';
import reducer from './cart.reducer';
import actions from './actions';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { cartItems: [] });

  const increase = (payload) => {
    dispatch({ type: actions.INCREASE, payload });
  };

  const decrease = (payload) => {
    dispatch({ type: actions.DECREASE, payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: actions.ADD_PRODUCT, payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: actions.REMOVE_PRODUCT, payload });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,

    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
