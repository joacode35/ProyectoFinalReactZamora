import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greetings }) => {
  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");

    if (categoryId) {
      const querySelection = query(
        queryCollection,
        where("category", "==", categoryId)
      );

      getDocs(querySelection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

  return (
    <>
      <div> {greetings} </div>

      <ItemList data={data} />
    </>
  );
};