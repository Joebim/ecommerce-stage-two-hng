import { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({
    cartItems: []
  });

  console.log('data.cartItems', data.cartItems)

  const addToCart = (item) => {
    setData((prevData) => ({
      ...prevData,
      cartItems: [...prevData.cartItems, item]
    }));
  };

  return (
    <Context.Provider value={{ data, setData, addToCart }}>
      {children}
    </Context.Provider>
  );
};