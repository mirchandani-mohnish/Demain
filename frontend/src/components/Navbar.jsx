import React from "react";
import { useState, useEffect } from "react";
import "./css/Navbar.css";

const Navbar = (props) => {
  // console.log(props.props.page);
  console.log(props.page);
  // useEffect(() => {
  //   setCurrPage(props.props.page);
  //   console.log(currPage);
  // }, []);
  const [open, setOpen] = useState();

  // if (window.innerWidth < 480) {
  //   if (open) {
  //     return (
  //       <div className="w-full h-screen bg-theme-green bg-opacity-50 z-10">
  //         <button className="w-10 h-10" onClick={() => setOpen(!open)}>
  //           <p className="text-xl font-bold"> Close </p>
  //         </button>

  //         <div className="flex w-full h-full justify-center align-middle flex-col">
  //           <a
  //             href="/"
  //             className="w-full h-20 bg-theme-green rounded-lg py-4 m-2 bg-opacity-100"
  //           >
  //             <p className="text-xl font-bold"> Home </p>
  //           </a>
  //           <a
  //             href="/suggestions"
  //             className="w-full h-20 bg-theme-green rounded-lg py-4 m-2 bg-opacity-100"
  //           >
  //             <p className="text-xl font-bold"> Analytics </p>
  //           </a>
  //           <a
  //             href="/feedback"
  //             className="w-full h-20 bg-theme-green rounded-lg py-4 m-2 bg-opacity-100"
  //           >
  //             <p className="text-xl font-bold"> Feedback </p>
  //           </a>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <nav className="w-full h-30 bg-theme-green">
  //           <button
  //             className="w-10 h-10"
  //             onClick={() => {
  //               setOpen(!open);
  //             }}
  //           >
  //             Menu
  //           </button>
  //         </nav>
  //       </div>
  //     );
  //   }
  // } else {
  return (
    <nav className="w-full h-40 flex flex-wrap justify-center md:justify-start md:flex-row-reverse">
      <div className="float-right">
        <a
          href="/suggestions"
          onClick={(e) => {
            props.setPage(3);
          }}
          className="no-underline"
        >
          {props.page == 3 ? (
            <div className=" navItem bg-[#d2ef81] font-bold p-2 md:p-5 md:rounded-b-md md:mx-4">
              <p className=" text-center p-2 md:pt-16">Analytics</p>
            </div>
          ) : (
            <div className="navItem hover:bg-[#d2ef81] font-bold p-2 md:p-5 md:rounded-b-md md:mx-4">
              <p className=" text-center p-2 md:pt-16">Analytics</p>
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
            <div className=" navItem bg-[#d2ef81] font-bold p-2 md:p-5 md:rounded-b-md md:mx-4">
              <p className=" text-center p-2 md:pt-16">Analytics</p>
            </div>
          ) : (
            <div className="navItem hover:bg-[#d2ef81] font-bold p-2 md:p-5 md:rounded-b-md md:mx-4">
              <p className=" text-center p-2 md:pt-16">Analytics</p>
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
            <div className=" navItem bg-[#d2ef81] font-bold p-2 md:p-5 md:rounded-b-md md:mx-4">
              <p className=" text-center p-2 md:pt-16">Analytics</p>
            </div>
          ) : (
            <div className="navItem hover:bg-[#d2ef81] font-bold p-2 md:p-5 md:rounded-b-md md:mx-4">
              <p className=" text-center p-2 md:pt-16">Analytics</p>
            </div>
          )}
        </a>
      </div>
    </nav>
  );
  // }
};

export default Navbar;
