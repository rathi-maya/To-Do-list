import { useState } from "react";
import "../styles/Home.css"
import Header from "../Components/Header.jsx";
import TodoList from "../Components/TodoList.jsx";
import TodoInput from "../Components/TodoInput.jsx";

function Home() {

    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

  return (
    <>
      <div className="todo-container">
    <Header/>
     <TodoInput setTodos={setTodos} editTodo ={editTodo} setEditTodo={setEditTodo} />
     <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
     </div>
    </>
  )
}

export default Home