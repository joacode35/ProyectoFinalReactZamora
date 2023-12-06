import { Link } from "react-router-dom";
import { CartWidget } from "../cartwidget/CartWidget";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="/">Synthetic</Link>
        </div>

        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/Teclado">Teclado</Link>
          </li>
          <li>
            <Link to="/category/Auricular">Auricular</Link>
          </li>
          <li>
            <Link to="/category/Equipos">Equipos de sonido</Link>
          </li>
          <li>
            <Link to="cart">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
