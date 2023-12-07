import { Link } from "react-router-dom";
import { CartWidget } from "../cartwidget/CartWidget";
import logo from "../../data/piano.png";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-green-500 flex place-content-between items-center ps-8 pe-5 font-PoppinsFonts text-slate-100 ">
        <div>
          <Link className="flex items-center gap-3" to="/">
            <img className="w-24" src={logo} alt="" />
            <p className="text-[30px]">Synthetic</p>
          </Link>
        </div>
        <ul className="flex ps-20 gap-20">
          <li className="px-5 text-[20px]">
            <Link to="/">Inicio</Link>
          </li>
          <li className="px-5 text-[20px]">
            <Link to="/category/Teclado">Teclado</Link>
          </li>
          <li className="px-5 text-[20px]">
            <Link to="/category/Auricular">Auricular</Link>
          </li>
          <li className="px-5 text-[20px]">
            <Link to="/category/Equipos">Equipos</Link>
          </li>
        </ul>

        <Link className="text-decoration-none text-light" to="cart">
          <div className="flex items-end pr-4 gap-1">
            <CartWidget />
          </div>
        </Link>
      </nav>
    </>
  );
};
