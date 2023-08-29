"use client";
import React, { useEffect } from "react";
import {BiSolidDashboard, BiAnalyse, BiMoney} from 'react-icons/bi'
import {BsFillPencilFill} from 'react-icons/bs'

const dashboard = () => {
  return (
    <>
      <div>
        <div className="flex flex-row w-screen h-screen">
          <div className="w-screen bg-gray-950 p-10">
            <h1>DashBoard</h1>
          </div>
          <div className="w-96 bg-gray-900 px-5 py-5">
            <h1>Aditya's NewsLetter</h1>
            <div className="border-2 border-gray-700 w-[100%] h-96 rounded-lg flex flex-col items-center space-y-4 mt-6 py-4">
              <button className="w-[90%] border-2 border-gray-600 py-2 rounded-lg flex justify-center flex-row"><BiSolidDashboard size={22} /> DashBoard</button>
              <button className="w-[90%] border-2 border-gray-600 py-2 rounded-lg flex justify-center flex-row"><BsFillPencilFill size={18} /> Write</button>
              <button className="w-[90%] border-2 border-gray-600 py-2 rounded-lg flex justify-center flex-row"><BiAnalyse size={22} /> Analyze</button>
              <button className="w-[90%] border-2 border-gray-600 py-2 rounded-lg flex justify-center flex-row"><BiMoney size={22}/>Monetization</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
