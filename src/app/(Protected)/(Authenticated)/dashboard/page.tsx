"use client";
import React, { useEffect } from "react";
import { useUserData } from "@/Context";

const dashboard = () => {
  const { userData } = useUserData();

  useEffect(() => {
    console.log(userData);
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-row w-screen h-screen">
          <div className="w-64 bg-cyan-950">
            <h1>Aditya's NewsLetter</h1>
          </div>
          <div className="w-screen bg-cyan-900">
            <h1>DashBoard</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
