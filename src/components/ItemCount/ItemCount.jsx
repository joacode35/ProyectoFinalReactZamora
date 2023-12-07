import { useEffect, useState } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <div className="flex justify-center">
        <button
          className=" bg-green-500 text-white px-5 py-3 rounded-full text-md"
          disabled={count <= 1}
          onClick={decrease}
        >
          -
        </button>
        <span className="px-8 flex items-center"> {count} </span>

        <button
          className="bg-green-500 text-white px-5 py-3 rounded-full text-md"
          disabled={count >= stock}
          onClick={increase}
        >
          +
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="bg-green-500 text-white px-3 py-3 rounded-full text-md mt-4"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
