import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

//Traemos firestore, obtenemos los datos a traves de una promesa y con el metodo data() nos trae la informacion en forma de un objeto.
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
