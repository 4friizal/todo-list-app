import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Form from "./Form";

const ListTodo = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [idTodo, setIdTodo] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [task, setTask] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // ambil Data
  const fetchData = async () => {
    var config = {
      method: "get",
      url: "tasks",
    };

    await axios(config)
      .then((response) => {
        const { data } = response;
        setTask(data);
        setTasks(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  // Regex funtion
  function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  // search
  const requestSearch = (searchValue) => {
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = tasks.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field] ? row[field].toString() : null);
      });
    });
    setTask(filteredRows);
  };

  // add todo
  const handleSubmit = async (e) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: "tasks",
      data: {
        content,
      },
    };

    await axios(config)
      .then((response) => {
        alert("sukses menambah todo");
        setContent("");
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(() => fetchData());
  };

  // update todo
  const updateTodo = async (e) => {
    e.preventDefault();
    var config = {
      method: "post",
      url: `tasks/${idTodo}`,
      data: {
        content,
      },
    };

    await axios(config)
      .then((response) => {
        alert("sukses merubah todo");
        setContent("");
        setIsUpdate(false);
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(() => fetchData());
  };

  // delete todo
  const removeTodo = async (id) => {
    var config = {
      method: "delete",
      url: `tasks/${id}`,
    };

    await axios(config)
      .then((response) => {
        alert("sukses menghapus todo");
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(() => fetchData());
  };

  return (
    <div>
      <div className="flex justify-center">
        <input
          className="w-full rounded-xl p-2 my-2"
          type="text"
          onChange={(e) => requestSearch(e.target.value)}
          placeholder="search"
        />
      </div>
      <Form
        onChange={(e) => setContent(e.target.value)}
        onSubmit={(e) => (isUpdate ? updateTodo(e) : handleSubmit(e))}
        content={content}
        isUpdate={isUpdate}
        cancelUpdate={() => {
          setContent("");
          setIsUpdate(false);
        }}
      />
      {task.map((data) => (
        <div
          key={data.id}
          className="bg-sky-500 p-2 mt-3 rounded-lg flex justify-between items-center"
        >
          <h4
            className="text-xl"
            onClick={() => navigate(`/detail/${data.id}`)}
          >
            {data.content}
          </h4>
          <div className="flex">
            <AiFillEdit
              className="mr-2"
              size={20}
              onClick={() => {
                setIdTodo(data.id);
                setIsUpdate(true);
                setContent(data.content);
              }}
            />
            <AiOutlineDelete size={20} onClick={() => removeTodo(data.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
