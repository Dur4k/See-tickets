import React from "react";

const SreachResult = ({ date, city }) => {
  return (
    <div className="pl-3 pt-2 md:p-0 flex  md:items-center justify-center    md:flex-row flex-col w-full  bg-gray h-14">
      <div className=" md:text-center leading-3  md:text-sm  md:w-2/12">{date} Nov 2018</div>
      <div className=" md:ml-6 sm:w-10/12 w-auto">Fall Out Boy at O2 Arena, {city}</div>
    </div>
  );
};

export default SreachResult;
