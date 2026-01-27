import React from "react";

export default function Project({ data }) {
  return (
    <div className="project bg-red-700 px-7 py-12 rounded-md cursor-pointer">
      {/* icon */}
      <h1 className="text-[22px] font-semibold">{data.titleProject}</h1>
      <p className="text-[18px] font-normal line-clamp-1 mt-3">
        {data.descriptionProject}
      </p>
      <div className="bottom-project flex justify-between my-4">
        <p className="text-[17px] font-medium">Tasks :{data.tasks}</p>
        <p className="text-[17px] font-medium">Done : {data.done}</p>
      </div>
    </div>
  );
}
