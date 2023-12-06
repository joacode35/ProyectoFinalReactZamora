import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const addCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [addCart, setAddCart] = useState([]);

  // const addItem = (item, newQuantity) => {
  // const newCart = addCart.filter((prod) => prod.id !== item.id);
  // newCart.push({ ...item, quantity: newQuantity });
  // setAddCart(newCart);
  //  };

  // const addItem = (item, newQuantity) => {
  // const { quantity = 0 } = addCart.find((prod) => prod.id === item.id) || {};
  //const newCart = addCart.filter((prod) => prod.id !== item.id);
  //setAddCart([...newCart, { ...item, quantity: quantity + newQuantity }]);
  //};

  const addItem = (item, quantity) => {
    if (findCart(item.id)) {
      setAddCart(
        addCart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setAddCart([...addCart, { ...item, quantity }]);
    }
  };

  const sumPrice = () => {
    return addCart.reduce((less, upp) => less + upp.quantity * upp.price, 0);
  };

  const sumProducts = () =>
    addCart.reduce(
      (acumulador, actProducto) => acumulador + actProducto.quantity,
      0
    );

  console.log(`carrito:`, addCart);

  const wipeCart = () => setAddCart([]);

  const findCart = (id) =>
    addCart.find((product) => product.id === id) ? true : false;

  const removeCart = (id) =>
    setAddCart(addCart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        wipeCart,
        findCart,
        removeCart,
        addItem,
        sumPrice,
        sumProducts,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
