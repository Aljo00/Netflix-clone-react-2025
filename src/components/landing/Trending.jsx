import React from "react";
import TrendingBox from "./TrendingBox";

const Trending = () => {
  return (
    <div className="mt-5 lg:mt-14 z-10 relative">
      <h1 className="text-3xl font-bold text-white mb-4">Trending Now</h1>

      <div className="flex justify-between">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <div key={n} className="flex ">
            <TrendingBox image={`/img${n}.webp`} number={n} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
