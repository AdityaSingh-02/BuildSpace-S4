"use client";
import React, { Dispatch, FC, useEffect, useState } from "react";
import { useUserData } from "@/Context";

interface Props {
  setAction: Dispatch<React.SetStateAction<boolean>>;
}

const LoginComponent: FC<Props> = (props: Props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { setUserData } = useUserData();

  const handleClick = () => {
    setUserData(loginData);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 text-black w-full">
        <h1 className="text-gray-400 pb-16 -mt-16 text-3xl">
          Start your personal News Letter from today
        </h1>
        <input
          type="text"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          className="w-[60%] px-4 py-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          className="w-[60%] px-4 py-2 rounded-lg"
        />
        <button
          onClick={handleClick}
          className="bg-gray-500 text-gray-100 rounded-lg px-4 py-2">
          Login
        </button>
        <p className="text-gray-400">
          Don't Have a Account yet?{" "}
          <button onClick={() => props.setAction(false)} className="text-gray-100" >SignUp</button> now
        </p>
      </div>
    </>
  );
};

export default LoginComponent;
