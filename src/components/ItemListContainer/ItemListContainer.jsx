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

//Creamos el componente ItemListContainer.
export const ItemListContainer = ({ greetings }) => {
  //Traemos el elemento getFirestore, encontramos la informacion con la id de la collecion y traemos la data con una promesa.
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
      <div className="text-white text-center text-5xl pt-16">
        {" "}
        {
          greetings /* Capturamos el parametro "greetings" y le otorgamos el mensaje a traves de una props en App.jsx */
        }{" "}
      </div>
      <div className="flex mt-24 justify-center">
        <div className="grid grid-cols-3 gap-20 pb-10">
          <ItemList data={data} />
        </div>
      </div>
    </>
  );
};
