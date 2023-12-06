import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", itemId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [itemId]);

  return <ItemDetail data={data} />;
};
