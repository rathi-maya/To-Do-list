import "../styles/TodoInput.css";
import { useState } from "react";

function TodoInput({setTodos}) {

  const[title, setTitle] = useState("");

  const handleAdd = async() =>{
    const response = await fetch("http://localhost:5000/todos",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title
      })
    })
    const data = await response.json();
    setTodos((prevTodos) => [...prevTodos, data]);
  }

  return (
    <div className="todo-input">
      <input type="text" value={title} onChange={((e)=> setTitle(e.target.value))} placeholder="Enter the task" />
      <button onClick={()=>handleAdd()} className="AddBtn">ADD</button>
    </div>
  );
}

export default TodoInput;
