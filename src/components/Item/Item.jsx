import { Link } from "react-router-dom";

//Creamos el componente Item y seteamos la informacion de db.
export const Item = ({ info }) => {
  return (
    <>
      <div className="w-80 p-7 border-4 border-slate-100  shadow-xl hover:shadow-2xl rounded-3xl bg-white pb-10 transform hover:scale-105 transition duration-300">
        <div className="flex-justify-center pb-4">
          <img className="w-60 rounded-lg" src={info.img} alt="" />
        </div>
        <h2 className="font-semibold pb-3 text-xl"> {info.title} </h2>
        <p className="pb-3 text-xl"> ${info.price} </p>
        <div className="pt-3">
          <Link
            className="bg-green-500 text-white px-3 py-2.5 rounded-full text-md"
            to={`/item/${info.id}`}
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </>
  );
};
