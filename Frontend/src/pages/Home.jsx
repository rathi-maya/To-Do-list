import { useState } from "react";
import "../styles/Home.css"
import Header from "../Components/Header.jsx";
import TodoList from "../Components/TodoList.jsx";
import TodoInput from "../Components/TodoInput.jsx";

function Home() {

    const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="todo-container">
    <Header/>
     <TodoInput setTodos={setTodos} />
     <TodoList todos={todos} setTodos={setTodos} />
     </div>
    </>
  )
}

export default Home