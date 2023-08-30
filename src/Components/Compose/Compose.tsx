import React from "react";

const Compose = () => {
  return (
    <>
      <div className="">
        <h1 className="text-xl font-semibold">Posts</h1>
        <p className="text-sm text-gray-200">
          Create new posts, edit posts and view previous posts
        </p>
        <div className="text-black space-x-7 pt-6">
          <input type="text" placeholder="Search" className="px-4 py-2 rounded-xl" />
          <select name="search" id="" className="px-4 py-2 w-56 rounded-xl">
            <option className="text-lg" value="Posts">All Posts</option>
            <option value="Featured">Featured</option>
            <option value="Published">Published</option>
            <option value="Scheduled">Scheduled</option>
          </select>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-gray-500 h-[500px] my-10 rounded-xl overflow-x-auto px-2"></div>
      </div>
    </>
  );
};

export default Compose;
