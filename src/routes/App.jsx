import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailTodo from "../pages/DetailTodo";
import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_API_KEY}`;

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
