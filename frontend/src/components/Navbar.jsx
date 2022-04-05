import React from "react";
import { useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const [page, setPage] = useState(1);
  console.log(page);
  return (
    <nav className="w-screen h-40 border-2">
      <div className="float-right">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(3);
          }}
          className="no-underline"
        >
          {page == 3 ? (
            <div className="w-48 h-40 bg-yellow-300 p-5 font-bold">
              <p className=" text-center">Suggestion</p>
            </div>
          ) : (
            <div className="w-48 h-40 hover:bg-yellow-300 p-5 font-bold">
              <p className=" text-center">Suggestion</p>
            </div>
          )}
        </a>
      </div>
      <div className="float-right">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(2);
          }}
          className="no-underline"
        >
          {page == 2 ? (
            <div className="w-48 h-40 bg-yellow-300 p-5 font-bold">
              <p className=" text-center">Feedback</p>
            </div>
          ) : (
            <div className="w-48 h-40 hover:bg-yellow-300 p-5 font-bold">
              <p className=" text-center">Feedback</p>
            </div>
          )}
        </a>
      </div>
      <div className="float-right">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(1);
          }}
          className="no-underline"
        >
          {page == 1 ? (
            <div className="w-48 h-40 bg-yellow-300 p-5 font-bold">
              <p className=" text-center">Home</p>
            </div>
          ) : (
            <div className="w-48 h-40 hover:bg-yellow-300 p-5 font-bold">
              <p className=" text-center">Home</p>
            </div>
          )}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
