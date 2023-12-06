import { TbShoppingCartCode } from "react-icons/tb";
import { addCartContext } from "../../api/CartContext";

export const CartWidget = () => {
  const { sumProducts } = addCartContext();

  return (
    <>
      <TbShoppingCartCode />
      <p> {sumProducts() || ""} </p>
    </>
  );
};
