"use client";
import React, { Dispatch, FC, useEffect, useState } from "react";
import { useUserData } from "@/Context";
import appwriteService from "@/appwrite-service/config";
import { useRouter } from "next/navigation";

interface Props {
  setAction: Dispatch<React.SetStateAction<boolean>>;
}

const LoginComponent: FC<Props> = (props: Props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  // const { setUserData } = useUserData();

  const handleClick = () => {
    // setUserData(loginData);
    appwriteService.login(loginData).then((res) => {
      router.replace("/dashboard");
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 text-black w-full">
        <h1 className="text-gray-400 pb-16 -mt-16 text-xl md:text-3xl px-2 md:px-0">
          Start your personal News Letter from today
        </h1>
        <input
          type="text"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          className="md:w-[60%] px-4 py-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          className="md:w-[60%] px-4 py-2 rounded-lg"
        />
        <button
          onClick={handleClick}
          className="bg-gray-500 text-gray-100 rounded-lg px-4 py-2">
          Login
        </button>
        <p className="text-gray-400">
          Don't Have a Account yet?{" "}
          <button
            onClick={() => props.setAction(false)}
            className="text-gray-100">
            SignUp
          </button>{" "}
          now
        </p>
      </div>
    </>
  );
};

export default LoginComponent;
