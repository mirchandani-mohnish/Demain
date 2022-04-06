import React from "react";
import Fade from "react-reveal/Fade";
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      <div className="container flex justify-between justify-items-center align-middle h-screen">
        <Fade left>
          <div className="flex-item justify-center align-middle m-auto w-1/2 md:w-full sm:w-full">
            <img src="/homeImg.png" alt="pizza-img" />
          </div>
        </Fade>
        <Fade right>
          <div className="flex-item w-1/2 md:w-full sm:w-full">
            <div className="contentBox rounded-md m-auto">
              <p className="text-3xl text-center font-bold">9/100</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
