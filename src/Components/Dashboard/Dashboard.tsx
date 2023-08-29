import React from "react";

const Dashboard = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">DashBoard</h1>
        <div className=" grid grid-cols-4 border-2 border-gray-500 my-10 h-72 rounded-xl items-center ">
          <div className="flex flex-col items-center pt-2 border-r-2 border-gray-500 h-full">
            <h2>Active Subscribers</h2>
            <div className="flex flex-col justify-center h-full space-y-2">
              <p className="text-5xl">0</p>
              <p className="text-sm font-semibold text-gray-300">from 0</p>
              <p className="bg-gray-600 px-3 py-1 rounded-full text-sm">-- 0%</p>
            </div>
          </div>
          <div className="flex justify-center pt-2 border-r-2 border-gray-500 h-full">
            <h2>Open rate (Avg)</h2>
          </div>
          <div className="flex justify-center pt-2 border-r-2 border-gray-500 h-full">
            <h2>Click Rate (Avg)</h2>
          </div>
          <div className="flex flex-col justify-around h-full">
            <div className="border-b-2 border-gray-500 h-[50%]">Posts</div>
            <div className="h-[50%]">Engagement</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
