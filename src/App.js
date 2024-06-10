import "./App.css";
import React from "react";
import { CartProvider } from "./component/CartContext";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
