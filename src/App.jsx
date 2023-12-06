import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/navbar/Navbar";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./api/CartContext";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greetings={"hola"} />}
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
