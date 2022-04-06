import React from "react";
import { useState } from "react";
import "./css/Navbar.css";

const Navbar = (props) => {
  console.log(props.page);

  return (
    <nav className="w-full h-40">
      <div className="float-right">
        <a
          href="/suggestions"
          onClick={(e) => {
            props.setPage(3);
          }}
          className="no-underline"
        >
          {props.page == 3 ? (
            <div className=" navItem bg-[#d2ef81] p-5 font-bold rounded-b-md mx-4">
              <p className=" text-center pt-16">Suggestion</p>
            </div>
          ) : (
            <div className="navItem h-40 hover:bg-[#d2ef81] p-5 font-bold rounded-b-md mx-4">
              <p className=" text-center pt-16">Suggestion</p>
            </div>
          )}
        </a>
      </div>
      <div className="float-right">
        <a
          href="/feedback"
          onClick={(e) => {
            props.setPage(2);
          }}
          className="no-underline"
        >
          {props.page == 2 ? (
            <div className="navItem h-40 bg-[#d2ef81] p-5 font-bold rounded-b-md mx-4">
              <p className=" text-center pt-16">Feedback</p>
            </div>
          ) : (
            <div className="navItem h-40 hover:bg-[#d2ef81] p-5 font-bold rounded-b-md mx-4">
              <p className=" text-center pt-16">Feedback</p>
            </div>
          )}
        </a>
      </div>
      <div className="float-right">
        <a
          href="/"
          onClick={(e) => {
            props.setPage(1);
          }}
          className="no-underline"
        >
          {props.page == 1 ? (
            <div className="navItem h-40 bg-[#d2ef81] p-5 font-bold rounded-b-md mx-4">
              <p className="text-center pt-16">Home</p>
            </div>
          ) : (
            <div className="navItem h-40 hover:bg-[#d2ef81] p-5 font-bold rounded-b-md mx-4">
              <p className="text-center pt-16">Home</p>
            </div>
          )}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
