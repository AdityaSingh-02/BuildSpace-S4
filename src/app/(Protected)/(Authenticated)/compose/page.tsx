import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-row w-screen h-screen">
        <div className="flex flex-row w-screen bg-gray-950 p-10 overflow-x-hidden overflow-auto h-screen">
          <div className="border-2 rounded-xl w-[65%]">left</div>
          <div className="w-[35%]">right</div>
        </div>
      </div>
    </>
  );
};

export default page;
