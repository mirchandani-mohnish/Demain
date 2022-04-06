import React from "react";
import Fade from "react-reveal/Fade";
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <Fade left>
          <div className="justify-center w-1/2 md:w-full sm:w-full">
            <img src="/homeImg.png" alt="pizza-img" />
          </div>
        </Fade>
        <Fade right>
          <div className="w-1/2 md:w-full sm:w-ful">
            <div className="justify-center rounded-md flex bg-[#d2ef81] w-1/2 h-1/2">
              <p className="text-3xl text-center font-bold h-full w-full">
                9/100
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
