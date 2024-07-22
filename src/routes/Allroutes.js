import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../pages/Home/HomePage";
import ProductList from "../pages/Products/ProductList";
import { ProductDetail } from "../pages/ProductDetails";

const Allroutes = () => {
  return (
    <main>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail/>}/>
    </Routes>
    
    </main>
  );
};

export default Allroutes;
