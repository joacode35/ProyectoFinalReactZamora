import React, { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { addCartContext } from "../../api/CartContext";

//Creamos el componente ItemDetail e importamos addCartContext para el agregado de productos.
export const ItemDetail = ({ data }) => {
  const [cart, setCart] = useState(false);

  const { addItem } = addCartContext();

  const onAdd = (quantity) => {
    setCart(true);
    addItem(data, quantity);
  };

  return (
    <div className="pt-20">
      <h1 className="text-white pt-4 text-3xl pb-3">Detalles del producto</h1>
      <div className="flex justify-between p-6 bg-white rounded-2xl shadow-xl">
        <img className="w-64" src={data.img} alt="" />

        <p className="flex items-center mr-16 ml-6"> {data.description} </p>
        <div className="flex items-center ">
          {cart ? (
            <Link
              className="flex items-center bg-green-500 text-white px-5 pt-2 pb-2 rounded-xl text-md"
              to="/cart"
            >
              {" "}
              Terminar compra{" "}
            </Link>
          ) : (
            <ItemCount
              initial={1}
              stock={6}
              onAdd={
                onAdd
              } /*Traemos el componente ItemCount para la funcionalidad de ItemDetail. */
            />
          )}
        </div>
      </div>
    </div>
  );
};
