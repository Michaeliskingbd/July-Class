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
    <section className="grid grid-cols-2">
      <div>
        <img
          className="w-full object-cover"
          src={singleProduct.images}
          alt="image"
        />
      </div>
      <div className="p-10">
        <div className="">
          <div>
            <p>{singleProduct.category}</p>
            <p className="font-semibold text-xl">{singleProduct.title}</p>
            <p>{singleProduct.description}</p>
            <span>${singleProduct.price}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;

//https://dummyjson.com/products/1
