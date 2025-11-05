import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${id}`);
        console.log(res);
        setSingleProduct(res.data);
      } catch (err) {
        console.error("error", err);
      }
    };
    fetchproduct();
  }, []);
  return (
    <section className="flex items-center p-24 justify-center">
      <article className="relative shadow-md w-72">
        <img className="w-52" src={singleProduct.images[0]} alt="image" />
        <div className="p-4">
          <p className="font-semibold text-xl">{singleProduct.title}</p>
          <span>${singleProduct.price}</span>
          <div className="absolute top-2 right-3 bg-black/50 text-white px-3 py-1">
            <span>{singleProduct.category}</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProductPage;

//https://dummyjson.com/products/1
