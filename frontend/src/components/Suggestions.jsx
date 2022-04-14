import React from "react";
import { Fade } from "react-reveal";

const Suggestions = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full h-full bg-theme-green">
        <div className="h-full">
          <iframe
            title="31mar"
            width={window.innerWidth}
            height={window.innerHeight}
            src="https://app.powerbi.com/reportEmbed?reportId=ab8cab4f-f4ff-4c8a-a5a8-c602e64233b7&autoAuth=true&ctid=d95bf95d-585e-4859-8c18-bb8e7597f5f2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLXdlc3QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
      {/* <div className="flex justify-between items-center w-full">
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
      </div> */}
    </div>
  );
};

export default Suggestions;
