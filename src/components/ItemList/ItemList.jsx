import { Item } from "../Item/Item";

//Creamos el componente ItemList y hacemos un mapeo.
export const ItemList = ({ data = [] }) => {
  return data.map((product) => <Item key={product.id} info={product} />);
};
