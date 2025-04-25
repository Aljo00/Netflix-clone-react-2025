import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginDiv = () => {
  const [signState, setSignState] = useState("Sign In");

  const navigate = useNavigate();

  const inputStyle =
    "mb-6 p-3 bg-zinc-800 rounded-sm outline-none focus:outline-red-600";

  return (
    <div className="netflix-bg relative flex justify-center items-center h-screen">
      <div className="absolute top-4 left-16">
        <img
          onClick={() => navigate("/")}
          className="w-[164px] h-[40px] pl-[16px] cursor-pointer"
          src="/Netflix-logo.png"
          alt=""
        />
      </div>

      <form action="">
        <div className="p-14 flex flex-col w-[390px] bg-black/70 rounded-md">
          <p className="text-2xl font-bold mb-6">{signState}</p>
          {signState === "Sign In" ? (
            <></>
          ) : (
            <input className={inputStyle} type="text" placeholder="Your name" />
          )}
          <input className={inputStyle} type="text" placeholder="Email" />
          <input className={inputStyle} type="text" placeholder="Password" />
          <button className="bg-red-600 px-7 py-2 rounded-sm text-xl mb-2">
            {signState}
          </button>
          <div className="flex justify-between mb-6">
            <div>
              <input type="checkbox" />
              Remember Me
            </div>{" "}
            <p>Need Help?</p>
          </div>
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                className="font-medium cursor-pointer"
                onClick={() => setSignState("Sign Up")}
              >
                Sign up now
              </span>
            </p>
          ) : (
            <p>
              Alredy have account?{" "}
              <span
                className="font-medium cursor-pointer"
                onClick={() => setSignState("Sign In")}
              >
                Sign in now
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginDiv;
