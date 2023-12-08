import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const addCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [addCart, setAddCart] = useState([]);

  /*A traves de esta funcion verificamos que si hay un producto en el carrito se mapea con un nuevo array, modificando la cantidad "quantity" con el cambio de estado "setAddCart" */
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
