import { Link } from "react-router-dom";
import { addCartContext } from "../../api/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartView } from "../CartView/CartView";
import Swal from "sweetalert2";

//Creamos el componente Cart e importamos addCartContext para el agregado y suma de productos.
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
    //Agregamos SweetAlert2 para mayor interactividad y hacemos post con "addDoc".
    Swal.fire({
      color: "#f8f8f8",
      title: "Gracias",
      text: "Su compra fue efectuada con exito!",
      icon: "success",
      confirmButtonColor: "#1dbc5d",
      background: "#424242",
    });
    const db = getFirestore();
    const checkColection = collection(db, "orders");
    addDoc(checkColection, checkOut).then(({ id }) =>
      console.log("id de compra:", id)
    );
  };

  if (addCart.length === 0) {
    return (
      <>
        <div className="flex justify-center gap-20 text-[30px] mt-60">
          <p className="flex items-center">No hay productos en el carrito</p>
          <Link
            className="bg-slate-600 text-white h-12 p-10 flex  items-center rounded-xl"
            to="/"
          >
            {" "}
            Hacer compras{" "}
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {addCart.map((product) => (
        <CartView key={product.id} product={product} />
      ))}
      <div className="flex text-white justify-center container mx-auto rounded-xl gap-40 bg-green-600 mt-10 pt-10 pb-10 mb-5">
        <p className="flex items-center">total: {sumPrice()}</p>
        <button
          className="bg-green-700 h-12 p-5 flex  items-center rounded-xl "
          onClick={handleClick}
        >
          Comprar producto/s
        </button>
      </div>
    </>
  );
};
