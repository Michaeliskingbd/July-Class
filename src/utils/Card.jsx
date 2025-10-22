import React from "react";

const Card = ({ title, subtitle, text, backImg }) => {
  const isWinter = true;
  return (
    <article
      style={{ backgroundImage: `url(${backImg})` }}
      className="relative  bg-cover bg-center h-[480px] w-[400px]"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="text-white flex flex-col justify-end h-full py-12 gap-3 px-10 z-50">
        <h1 className="z-50 text-2xl font-bold">{title}</h1>
        <p className="z-50">{subtitle}</p>
        <div className="z-50">
          <button
            title="shop now"
            className={`text-blue-500 p-5  ${
              isWinter ? "bg-blue-200" : "bg-red-500"
            }`}
          >
            Shop now
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
