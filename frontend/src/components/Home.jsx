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
      <div className="flex flex-wrap justify-between items-stretch w-full md:flex-nowrap">
        <Fade left>
          <div className="justify-center md:w-1/2 md:p-3 md:mx-auto">
            <img src="/homeImg.png" alt="pizza-img" />
          </div>
        </Fade>
        <Fade right>
          <div className="flex justify-center align-middle w-full p-10 md:p-20 md:mx-auto md:w-1/2">
            <div className="flex justify-center rounded-lg bg-[#d2ef81] w-full flex-col">
              <p className="font-bold align-middle m-auto md:text-3xl">
                The Current Capacity: <br /> {finalCount} <br />
              </p>
              <p className="font-bold align-middle m-auto md:text-3xl">
                Chances of Getting a seat:
                <br /> {100 - finalCount / 2}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
