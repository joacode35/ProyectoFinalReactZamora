import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-xl relative flex flex-col items-center w-[340px] ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-green-500 w-full p-4 flex items-center justify-between rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300"
      >
        Categorias
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="bg-green-400 absolute top-20 flex flex-col items-start rounded-lg  w-full hover:bg-green-500 p-3 gap-3">
          <Link to="/category/Teclado">
            <p className="hover:text-green-300">Teclados</p>
          </Link>
          <Link to="/category/Auricular">
            <p className="hover:text-green-300">Auriculares</p>
          </Link>
          <Link to="category/Equipos">
            <p className="hover:text-green-300">Equipos</p>
          </Link>
        </div>
      )}
    </div>
  );
};
