import React from "react";
import CountUp from "react-countup";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div>
      {" "}
      <article className="flex lg:flex-row flex-col space-y-14">
        <div className="flex-1 space-y-4">
          <h6 className="font-semibold text-xl">Testimonials</h6>
          <h2 className="font-semibold text-5xl leading-[1.2]">
            Trusted by Thousand of Students and Tutors
          </h2>
        </div>

        <div className="flex-1">
          <div className="flex lg:items-center lg:justify-center gap-4">
            <h1 className="font-bold text-8xl">
              <CountUp start={0} end={4.87} duration={2.75} decimals={2} />
            </h1>
            <div className="flex flex-col space-y-2">
              <span className="flex text-orange-400 gap-2 text-xs">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <h4 className="font-semibold text-lg">2,394 Ratings</h4>
              <h5 className="font-semibold text-lg">Google Reviews</h5>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Testimonials;
