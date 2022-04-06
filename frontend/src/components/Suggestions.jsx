import React from "react";
import { Fade } from "react-reveal";

const Suggestions = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <Fade left>
          <div className="justify-center w-1/2 md:w-full sm:w-full self-center">
            <img src="/feedbackImg.png" alt="pizza-img" />
          </div>
        </Fade>
        <Fade right>
          <div className="w-1/2 md:w-full sm:w-full flex justify-center self-center">
            <div className="justify-center rounded-xl align-top bg-[#d2ef81]">
              <p className="text-3xl font-bold">Suggest Something New</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Suggestions;
