import React, { useState, useEffect } from "react";
import ProductCard from "../../components/elements/ProductCard";
import { FilterBar } from "./components/FilterBar";

const ProductList = () => {
  const [show, setShow] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchResponse() {
      const response = await fetch(
        "http://localhost:8000/products?name_like=react"
      );

      const data = await response.json();
      setProducts(data);
    }
    fetchResponse();
  }, []);

  return (
    <main>
      <div className="text-white  flex justify-between dark:text-slate">
        <h2 className="rounded border-white border-solid bg-blue-700 p-3">{`Ebooks(${products.length})`}</h2>
        <button
          onClick={() => setShow(!show)}
          className="rounded border-white border-solid bg-blue-700 tracking-wide p-3"
        >
          Filter
        </button>
      </div>
      <div className="m-4 gap-3 flex flex-wrap justify-center lg:flex-row ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};

export default ProductList;
