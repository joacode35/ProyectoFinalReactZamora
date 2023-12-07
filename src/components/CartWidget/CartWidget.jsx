import { TbShoppingCartCode } from "react-icons/tb";
import { addCartContext } from "../../api/CartContext";

export const CartWidget = () => {
  const { sumProducts } = addCartContext();

  return (
    <>
      <TbShoppingCartCode size={40} />
      <p> {sumProducts() || ""} </p>
    </>
  );
};
