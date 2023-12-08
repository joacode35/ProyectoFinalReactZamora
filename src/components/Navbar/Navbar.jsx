import { Link } from "react-router-dom";
import logo from "../../data/piano.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Dropdown } from "../Dropdown/Dropdown";

//Creamos el componente Navbar y reemplazamos los a/href por Link/to.
export const Navbar = () => {
  return (
    <>
      <nav className="bg-green-600 flex place-content-around items-center ps-8 pe-5 font-PoppinsFonts text-slate-100 ">
        <div>
          <Link className="flex items-center gap-3" to="/">
            <img className="w-24" src={logo} alt="" />
            <p className="text-[30px]">Synthetic</p>
          </Link>
        </div>
        <ul className="flex ps-20 gap-20">
          <li className="px-5 text-[20px] flex items-center">
            <Link className="hover:text-green-300" to="/">
              Inicio
            </Link>
          </li>
          <div className="px-5 text-[20px]">
            <Dropdown />
          </div>
        </ul>

        <Link className="text-decoration-none text-light" to="cart">
          <div className="flex items-end pr-4 gap-1">
            <CartWidget /* importamos el componente CartWidget dentro del componente Navbar */
            />
          </div>
        </Link>
      </nav>
    </>
  );
};
