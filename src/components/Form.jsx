import React from "react";
import { useState } from "react";

const handleChange = (e) => {
  console.log(e.target.value);
};

export default function Form() {
  return (
    <form className="flex justify-between">
      <div>
        <input
          type="text"
          className="bg-sky-50 border border-sky-300 text-sky-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[22rem] p-2.5 dark:bg-sky-700 dark:border-sky-600 dark:placeholder-sky-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add to list"
          required=""
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 py-2 px-10 rounded-lg"
      >
        Add
      </button>
    </form>
  );
}
