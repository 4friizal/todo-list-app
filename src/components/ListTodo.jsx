import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

import Form from "./Form";

const ListTodo = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // ambil Data
  const fetchData = () => {
    var config = {
      method: "get",
      url: "tasks",
    };

    axios(config)
      .then((response) => {
        const { data } = response;
        // console.log(data);
        setTask(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const removeTodo = () => {
    alert("suskse");
  };

  return (
    <div>
      <Form />
      {task.map((data) => (
        <div
          key={data.id}
          className="bg-sky-500 p-2 mt-3 rounded-lg flex justify-between items-center"
        >
          <h4 className="text-xl">{data.content}</h4>
          <div className="flex ">
            <AiFillEdit className="mr-2" size={20} />
            <AiOutlineDelete size={20} onClick={() => removeTodo(data.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
