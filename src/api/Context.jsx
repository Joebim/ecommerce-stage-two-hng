import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedData = sessionStorage.getItem('cart');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevData) => {
      const existingItem = prevData.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevData.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevData, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevData) => prevData.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prevData) =>
      prevData.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevData) =>
      prevData.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <Context.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity
    }}>
      {children}
    </Context.Provider>
  );
};
