"use client";
import React, { useEffect, useState } from "react";

// Components
import { Dashboard, Compose } from "@/Components";

// Icons
import { BiSolidDashboard, BiAnalyse, BiMoney } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";

const dashboard = () => {
  const [pageRender, setPageRender] = useState<string>("Dashboard");

  // Helps in initial render
  useEffect(()=> {
    setPageRender("dashboard")
  },[])

  return (
    <>
      <div>
        <div className="flex flex-row w-screen h-screen">
          <div className="w-screen bg-gray-950 p-10 overflow-x-hidden overflow-auto">
            {pageRender === "dashboard" && <Dashboard composeMessage={setPageRender} />}
            {pageRender === "compose" && <Compose />}
          </div>
          <div className="w-96 bg-gray-900 px-5 py-5 z-10">
            <h1>Aditya's NewsLetter</h1>
            <div className="border-2 border-gray-700 w-[100%] h-96 rounded-lg flex flex-col items-center space-y-4 mt-6 py-4">
              <button
                onClick={() => setPageRender("dashboard")}
                className="w-[90%] border-2 border-gray-600 py-2 rounded-lg flex justify-center flex-row">
                <BiSolidDashboard size={22} /> DashBoard
              </button>
              <button
                onClick={() => setPageRender("compose")}
                className="w-[90%] border-2 border-gray-600 py-2 rounded-lg flex justify-center flex-row">
                <BsFillPencilFill size={18} /> Write
              </button>
              <button
                onClick={() => setPageRender("analyse")}
                className="w-[90%] border-2 border-gray-600 py-2 rounded-lg flex justify-center flex-row">
                <BiAnalyse size={22} /> Analyze
              </button>
              <button
                onClick={() => setPageRender("monetization")}
                className="w-[90%] border-2 border-gray-600 py-2 rounded-lg flex justify-center flex-row">
                <BiMoney size={22} />
                Monetization
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
