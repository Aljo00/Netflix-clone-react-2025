import React from "react";

const TrendingBox = ({ image, number }) => {
  return (
    <div className="relative hover:scale-105 transition-all duration-300 cursor-pointer">
      <img className="w-28 h-60 rounded-2xl" src={image} alt="" />
      <div
        className="absolute top-5 left-0 -translate-x-6 text-8xl font-bold text-black"
        style={{ WebkitTextStroke: "2px white" }}
      >
        {number}
      </div>
    </div>
  );
};

export default TrendingBox;
