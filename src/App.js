import "./App.css";
import Navber from "./components/Navber";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import { items } from "./Data";
import { useState } from "react";

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navber cart={cart}setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
