import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductState from "./context/ProductState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";
import FavouriteState from "./context/FavouriteState";

const App = () => {
  return (
    <FavouriteState>
      <ProductState>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/favourite"
              element={<Favourite />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
        </Router>
      </ProductState>
    </FavouriteState>
  );
};

export default App;
