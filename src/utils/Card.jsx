import React from "react";

const Card = ({ title, subtitle, text, backImg }) => {
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
            className="bg-white text-black p-3 font-semibold w-[150px] transition-all duration-150 ease-in  hover:bg-black hover:text-white"
          >
            {text}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
