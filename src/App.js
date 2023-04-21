// import logo from "./logo.svg";
import "./App.css";
// import TopHead from "./components/TopHead";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";

import AddTodo from "./components/TodoList/AddTodo";
import EditTodo from "./components/TodoList/EditTodo";

function App() {
  return (
    <Routes>
      <Route path="/todolist" element={<TodoList />} />

      <Route path="/addtask" element={<AddTodo />} />
      <Route path="/edittodo/:id" element={<EditTodo />} />
    </Routes>
  );
}

export default App;
