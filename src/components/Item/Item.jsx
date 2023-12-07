import { Link } from "react-router-dom";

export const Item = ({ info }) => {
  return (
    <>
      <div className="w-80 p-7 border rounded-3xl bg-white">
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
