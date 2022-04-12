import React from "react";
import Slide from "react-reveal/Slide";

const Login = () => {
  return (
    <div>
      <Slide left>
        <div className="flex flex-col justify-center flex-wrap border-8 border-theme-green max-w-md self-center mx-auto rounded-xl">
          <div className="border-solid ">
            <p className="text-bold text-3xl align-top pt-7">Login</p>
          </div>
          <label for="Uname" className="text-lg p-3">
            Username
          </label>
          <input
            type="text"
            id="Uname"
            className="m-4 p-4 border-solid border-2 border-theme-green rounded-xl"
          ></input>
          <label for="Password" className="text-lg p-3">
            Password
          </label>
          <input
            type="password"
            id="Password"
            className="m-4 p-4 border-solid border-2 border-theme-green rounded-xl"
          ></input>
          <a href="/login" className="m-4 p-4 bg-theme-green rounded-xl">
            Submit
          </a>
        </div>
      </Slide>
    </div>
  );
};

export default Login;
