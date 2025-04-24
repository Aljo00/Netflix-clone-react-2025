import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TitleCard from "../components/home/TitleCard";

const Home = () => {
  return (
    <div>
      
      <TitleCard />
      <div className="px-14 lg:px-36 ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
