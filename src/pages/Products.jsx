import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await axios("https://dummyjson.com/products");
        console.log(res);
        setProducts(res.data.products);
      } catch (err) {
        console.error("error", err);
      }
    };
    fetchproduct();
  }, []);
  return (
    <section className="p-24 grid grid-cols-4 gap-4">
      {products.map((p, idx) => (
        <Link to={`${p.id}`}>
          <article key={idx} className="relative shadow-md w-72">
            <img className="w-52" src={p.images[0]} alt="image" />
            <div className="p-4">
              <p className="font-semibold text-xl">{p.title}</p>
              <span>${p.price}</span>
              <div className="absolute top-2 right-3 bg-black/50 text-white px-3 py-1">
                <span>{p.category}</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default Products;
