import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./api/CartContext";
import { Navbar } from "./components/Navbar/Navbar";

//Importamos react-router-dom con las rutas Routes y Route para optimizar el flujo de renderizado.
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  greetings={"Los mejores precios en un mismo lugar"}
                />
              }
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

//<ItemListContainer greetings={"holaa"} />
