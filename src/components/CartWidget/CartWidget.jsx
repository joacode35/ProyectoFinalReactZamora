import { TbShoppingCartCode } from "react-icons/tb";
import { addCartContext } from "../../api/CartContext";

//Creamos el componente CartWidget e importamos addCartContext para la suma de productos.
export const CartWidget = () => {
  const { sumProducts } = addCartContext();

  return (
    <>
      <div className="gap-3 flex items-end">
        <TbShoppingCartCode size={40} />
        <p className="flex rounded-full bg-green-700  w-8  justify-center leading-8">
          {" "}
          {sumProducts() || ""}{" "}
        </p>
      </div>
    </>
  );
};
