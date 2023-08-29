import React from "react";

const Dashboard = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">DashBoard</h1>
        <div className=" grid grid-cols-4 border-2 border-gray-500 my-10 px-10 h-72 rounded-xl items-center ">
          <div className="flex justify-center border-r-2 border-gray-500 h-full">1</div>
          <div className="flex justify-center border-r-2 border-gray-500 h-full">2</div>
          <div className="flex justify-center border-r-2 border-gray-500 h-full">3</div>
          <div className="flex justify-center h-full">4</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
