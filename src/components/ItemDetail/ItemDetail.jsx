import React, { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { addCartContext } from "../../api/CartContext";

export const ItemDetail = ({ data }) => {
  const [cart, setCart] = useState(false);

  const { addItem } = addCartContext();

  const onAdd = (quantity) => {
    setCart(true);
    addItem(data, quantity);
  };

  return (
    <div>
      <img src={data.img} alt="" />
      <div>
        <h1> {data.title} </h1>
        <p> {data.description} </p>
        {cart ? (
          <Link to="/cart"> Terminar compra </Link>
        ) : (
          <ItemCount initial={3} stock={5} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};
