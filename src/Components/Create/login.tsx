"use client";
import React, { useState } from "react";
import { useUserData } from "@/Context";

const LoginComponent = () => {
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
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
};

export default LoginComponent;
