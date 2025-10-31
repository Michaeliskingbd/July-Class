import React from "react";
import errorImage from "../assets/error.png";

const ErrorPage = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <img className="w-[400px]" src={errorImage} alt="error-image" />
    </section>
  );
};

export default ErrorPage;
