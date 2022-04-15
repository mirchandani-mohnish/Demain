import React from "react";
import Fade from "react-reveal/Fade";
import "./css/Home.css";
import { useEffect, useState } from "react";

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
  const [finalCount, setFinalCount] = useState();
  useEffect(() => {
    getData()
      .then((dataReceived) => {
        setFinalCount(dataReceived.at(-1).capacity);
        console.log(dataReceived.at(-1).capacity);
        // allCount = dataReceived;
        // console.log(allCount.at(-1));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center w-full md:flex-row">
        <Fade left>
          <div className="justify-center w-1/2 md:w-full">
            <img src="/homeImg.png" alt="pizza-img" />
          </div>
        </Fade>
        <Fade right>
          <div className="w-1/2 md:w-full sm:w-full">
            <div className="justify-center rounded-lg flex bg-[#d2ef81] w-1/2 h-1/2">
              <p className="text-3xl text-center font-bold h-full w-full md:text-lg">
                The Current Capacity is <br /> {finalCount}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
