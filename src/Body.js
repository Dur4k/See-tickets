import React from "react";
import Checkbox from "./Checkbox";
import SreachResult from "./SreachResult";

const Body = () => {
  return (
    <div className=" bg-gray flex   flex-col min-h-min  pb-10  ">
      {/* sreach */}
      <div className="lg:px-48  xl:px-72  mt-8  w-full  h-full   justify-center  px-4 sm:px-28 sm:px-30 lg:p-0 space-y-5  lg:space-y-0      flex lg:flex-row  flex-col ">
        <div className="flex flex-col  bg-white w-full lg:w-2/3   mr-5 px-4 pb-2  ">
          <div className="flex text-3xl mt-1 mb-4">Search results for "fall out boy"</div>
          <div className="space-y-2">
            <SreachResult city="London" date="22nd" />
            <SreachResult city="Manchester" date="23rd" />
            <SreachResult city="Nottingham" date="24th" />
            <SreachResult city="GlassGow" date="25th" />
          </div>
        </div>
        {/* filter */}

        <div className="justify-center w-full flex-col  h-full   bg-white lg:w-1/3  px-4  pb-2  ">
          <div className="flex text-3xl mt-1 mb-1">Filter</div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default Body;
