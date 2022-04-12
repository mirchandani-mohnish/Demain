import React from "react";
import Fade from "react-reveal/Fade";
import "./css/Home.css";
import { useEffect } from "react";

import { createClient } from "@supabase/supabase-js";

const getData = async () => {
  try {
    const supabaseUrl = "https://ucnntedpwuzzenoqgmae.supabase.co";
    const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const currentCount = await supabase.from("Canteen-Capacity").select("*");
    return currentCount.body;
  } catch (error) {
    console.log(error);
  }
};

const Home = () => {
  useEffect(() => {
    getData()
      .then((dataReceived) => {
        const allCount = dataReceived;
        console.log(allCount);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <Fade left>
          <div className="justify-center w-1/2 md:w-full sm:w-full">
            <img src="/homeImg.png" alt="pizza-img" />
          </div>
        </Fade>
        <Fade right>
          {/* <div className="w-1/2 md:w-full sm:w-ful">
            <div className="justify-center rounded-md flex bg-[#d2ef81] w-1/2 h-1/2">
              <p className="text-3xl text-center font-bold h-full w-full">
                9/100
              </p>
            </div>
          </div> */}
        </Fade>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="h-full">
          <iframe
            src="https://a8l1ihq6fk3uxyw.sg.qlikcloud.com/single/?appid=8289608d-9e61-436f-9881-7106d390b9b5&obj=JuJsP&opt=ctxmenu,currsel"
            style={{ border: "none", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
