import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailTodo from "../pages/DetailTodo";
import axios from "axios";

axios.defaults.baseURL = "https://api.todoist.com/rest/v1/";
axios.defaults.headers.common["Authorization"] =
  "Bearer f4f486483204cee08a078ce8bd8eeb356fa1a944";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
