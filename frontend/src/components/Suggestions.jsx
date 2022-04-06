import React from "react";
import { Fade } from "react-reveal";

const Suggestions = () => {
  return (
    <div>
      <div>
        <div className="container flex justify-between justify-items-center align-middle h-screen">
          <Fade left>
            <div className="flex-item justify-center align-middle m-auto w-1/2 md:w-full sm:w-full">
              <img src="/feedbackImg.png" alt="pizza-img" />
            </div>
          </Fade>
          <Fade right></Fade>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
