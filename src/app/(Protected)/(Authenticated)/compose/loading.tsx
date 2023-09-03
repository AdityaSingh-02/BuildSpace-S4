import React from "react";

const loading = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="flex flex-row w-screen bg-white p-10 overflow-x-hidden overflow-auto h-screen">
        <div className="border-2 rounded-xl w-[65%] bg-gray-200"></div>
        <div className="w-[35%] "></div>
      </div>
    </div>
  );
};

export default loading;
