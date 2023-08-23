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
      <div>DashBoard</div>
    </>
  );
};

export default dashboard;
