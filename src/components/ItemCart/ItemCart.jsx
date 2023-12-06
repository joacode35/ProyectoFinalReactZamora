import { addCartContext } from "../../api/CartContext";

export const ItemCart = ({ product }) => {
  const { removeCart } = addCartContext();

  return (
    <div>
      <img src={product.img} alt={product.title} />
      <p> titulo: {product.title} </p>
      <p> cantidad: {product.quantity} </p>
      <p> precio x u: {product.price} </p>
      <p> subtotal: ${product.quantity * product.price} </p>
      <button onClick={() => removeCart(product.id)}> Eliminar </button>
    </div>
  );
};
