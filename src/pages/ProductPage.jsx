import axios from "axios";
import React, { useEffect, useState } from "react";
import emptyImage from "../assets/empty.png";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios("https://fakestoreapi.com/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        console.error("Error", err);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      {products ? (
        <section className="p-10 grid grid-cols-4">
          {products.map((p, idx) => (
            <article key={idx}>
              <img className="mb-2 w-60" src={p.image}></img>
              <h3 className="font-bold mb-1">{p.title}</h3>
              <h5 className="text- text-gray-400 mb-1">{p.category}</h5>
              <p className=" text-sm font-bold">{p.price}</p>
            </article>
          ))}
        </section>
      ) : (
        <section className="h-screen flex items-center justify-center">
          <img className="w-[300px]" src={emptyImage} />
        </section>
      )}
    </div>
  );
};

export default ProductPage;
//1 Fetch
//2.Asynchronous function
//3.Axios
