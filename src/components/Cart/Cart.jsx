import { Link } from "react-router-dom";
import { addCartContext } from "../../api/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const Cart = () => {
  const { addCart, sumPrice } = addCartContext();

  const checkOut = {
    buyer: {
      name: "Joaquin",
      adress: "generic text",
      email: "joaquin@gmail.com",
      phone: "154334",
    },
    total: sumPrice(),
    items: addCart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
  };

  const handleClick = () => {
    const db = getFirestore();
    const checkColection = collection(db, "orders");
    addDoc(checkColection, checkOut).then(({ id }) => console.log(id));
  };

  if (addCart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to="/"> Hacer compras </Link>
      </>
    );
  }

  return (
    <>
      {addCart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {sumPrice()}</p>
      <button onClick={handleClick}>Generar orden</button>
    </>
  );
};
