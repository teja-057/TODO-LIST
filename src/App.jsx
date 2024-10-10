import AppName from "./components/AppName";
import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";
import Enjoy from "./components/Enjoy";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handlenewItem = (todoname, todoDate) => {
    let newItem = [...todoItems, { tname: todoname, tdate: todoDate }];
    setTodoItems(newItem);
  };
  const handleDelete = (name) => {
    let newItem = todoItems.filter((items) => items.tname !== name);
    setTodoItems(newItem);
  };
  return (
    <center className="todo-container">
      <AppName />
      <TodoAdd handlenewItem={handlenewItem} />
      {todoItems.length == 0 && <Enjoy></Enjoy>}
      <TodoItems todoItems={todoItems} handleDelete={handleDelete}></TodoItems>
    </center>
  );
}

export default App;
