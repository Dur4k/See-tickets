import React from "react";

const Header = () => {
  return (
    <div className=" p-3 mb-5 mt-2 md:m-0 space-y-1 md:px-16 flex md:flex-row flex-col h-32 w-screen justify-evenly  ">
      <div className="text-5xl flex sm:text-center  sm:self-center">See Tickets</div>

      {/* srach bar */}
      <div class=" h-8 md:h-9 text-base flex border-grey-light border border-button w-auto md:w-100 md:self-center ">
        <input class="px-2 pt-1 text-xl md:text-2xl w-full " type="text" placeholder="Search tickets" />
        <button class="w-1/4 px-2 bg-button  hover:bg-grey-lightest">
          <span class="flex self-center  items-center text-grey  hover:text-grey-darkest">
            <i class=" text-center w-full text-2xl text-white">Search</i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
