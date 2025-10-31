import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//Mapping
//Array of Product is Mimicking API in this context
const products = [
  {
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg",
    name: "DNK Yellow Shoes",
    category: "Men",
    price: "120.00",
  },
  {
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg",
    name: "DNK Blues Shoes",
    category: "Men",
    price: "175.00",
  },
  {
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg",
    name: "Dark Brown Jeans",
    category: "Men",
    price: "150.00",
  },
  {
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg",
    name: "Blue Denim Jeans",
    category: "Women",
    price: "200.00",
  },
  {
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg",
    name: "Basic Gray Jeans",
    category: "Women",
    price: "100.00",
  },
  {
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg",
    name: "Basic Gray Jeans",
    category: "Women",
    price: "100.00",
  },
];

const ProductCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {products.map((p, idx) => (
        <article key={idx} data-aos="fade-up" data-aos-duration="3000">
          <img className="mb-2 w-60" src={p.image}></img>
          <h3 className="font-bold mb-1">{p.name}</h3>
          <h5 className="text- text-gray-400 mb-1">{p.category}</h5>
          <p className=" text-sm font-bold">{p.price}</p>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
