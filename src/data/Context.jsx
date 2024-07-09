import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = sessionStorage.getItem('cartData');
    return savedData ? JSON.parse(savedData) : { cartItems: [] };
  });

  useEffect(() => {
    sessionStorage.setItem('cartData', JSON.stringify(data));
  }, [data]);

  console.log('data.cartItems', data.cartItems)

  const addToCart = (item) => {
    setData((prevData) => ({
      ...prevData,
      cartItems: [...prevData.cartItems, item]
    }));
  };

  const removeFromCart = (id) => {
    setData((prevData) => ({
      ...prevData,
      cartItems: prevData.cartItems.filter(item => item.id !== id)
    }));
  };

  return (
    <Context.Provider value={{ data, setData, addToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  );
};