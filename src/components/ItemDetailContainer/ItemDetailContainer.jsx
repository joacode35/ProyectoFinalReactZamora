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

  return (
    <div className="container mx-auto mt-5">
      <div className="row g-2">
        <ItemDetail data={data} />
      </div>
    </div>
  );
};
