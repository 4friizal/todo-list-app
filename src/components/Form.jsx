import React from "react";

const Form = (props) => {
  return (
    <form className="my-5" onSubmit={props.onSubmit}>
      {props.isUpdate ? (
        <div className="flex justify-around">
          <input
            type="text"
            className="bg-sky-50 border border-sky-300 text-sky-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-sky-700 dark:border-sky-600 dark:placeholder-sky-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add to list"
            required=""
            value={props.content}
            onChange={props.onChange}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 py-2 px-2 rounded-lg"
          >
            Update
          </button>
          <button
            className="text-white bg-red-700 py-2 px-2 rounded-lg"
            onClick={props.cancelUpdate}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex">
          <input
            type="text"
            className="bg-sky-50 border border-sky-300 text-sky-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[22rem] p-2.5 dark:bg-sky-700 dark:border-sky-600 dark:placeholder-sky-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add to list"
            required=""
            value={props.content}
            onChange={props.onChange}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 py-2 px-10 ml-1 rounded-lg"
          >
            Add
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
