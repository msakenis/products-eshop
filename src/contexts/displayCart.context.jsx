import React, { createContext, useState } from 'react';

export const DisplayCartContext = createContext();

export const DisplayCartProvider = ({ children }) => {
  const [displayCart, setDisplayCart] = useState(false);

  return (
    <DisplayCartContext.Provider value={{ displayCart, setDisplayCart }}>
      {children}
    </DisplayCartContext.Provider>
  );
};
