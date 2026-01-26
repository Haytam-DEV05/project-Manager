import React from "react";

export default function Project() {
  return (
    <div className="project bg-red-700 px-7 py-12 rounded-md cursor-pointer">
      {/* icon */}
      <h1 className="text-[22px] font-semibold">Make a Portfolio</h1>
      <p className="text-[18px] font-normal line-clamp-1 mt-3">
        in this project i will create a good portfolio in this project i will
        create a good portfolio in this project i will create a good portfolio
      </p>
      <div className="bottom-project flex justify-between my-4">
        <p className="text-[17px] font-medium">2 tasks</p>
        <p className="text-[17px] font-medium">1 done</p>
      </div>
    </div>
  );
}
