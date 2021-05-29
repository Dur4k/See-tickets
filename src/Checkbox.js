import React from "react";

const Checkbox = () => {
  return (
    <div class="flex flex-col text-sm ">
      <label class="inline-flex items-center mt-3">
        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />
        <span class="ml-2 text-gray-700">Music</span>
      </label>

      <label class="inline-flex items-center mt-3">
        <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" />
        <span class="ml-2 text-gray-700">Sport</span>
      </label>

      <label class="inline-flex items-center mt-3">
        <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" />
        <span class="ml-2 text-gray-700">Exhibitions</span>
      </label>

      <label class="inline-flex items-center mt-3">
        <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" />
        <span class="ml-2 text-gray-700">Comedy</span>
      </label>

      <label class="inline-flex items-center mt-3">
        <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" checked />
        <span class="ml-2 text-gray-700">Theatre</span>
      </label>
    </div>
  );
};

export default Checkbox;
