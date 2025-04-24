import React from "react";
import Navbar from "../Navbar";

const TitleCard = () => {
  return (
    <div className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80"></div>
        <Navbar />
      <h1 className="text-white text-4xl font-bold">name</h1>
    </div>
  );
};

export default TitleCard;
