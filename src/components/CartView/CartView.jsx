import { addCartContext } from "../../api/CartContext";

export const CartView = ({ product }) => {
  const { removeCart } = addCartContext();

  return (
    <div className="flex mt-20 justify-center">
      <div className="flex gap-20 bg-slate-200 rounded-xl pr-6">
        <img
          className="w-64 rounded-lg"
          src={product.img}
          alt={product.title}
        />
        <p className="flex items-center"> titulo: {product.title} </p>
        <p className="flex items-center"> cantidad: {product.quantity} </p>
        <p className="flex items-center"> precio x u: {product.price} </p>
        <p className="flex items-center">
          {" "}
          subtotal: ${product.quantity * product.price}{" "}
        </p>
        <div className="flex items-center ">
          <button
            className="bg-slate-600 text-white h-12 p-5 flex  items-center rounded-xl"
            onClick={() => removeCart(product.id)}
          >
            {" "}
            Eliminar{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
