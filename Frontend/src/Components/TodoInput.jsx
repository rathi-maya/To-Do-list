import "../styles/TodoInput.css";
import { useState, useEffect } from "react";

function TodoInput({setTodos, editTodo, setEditTodo}) {

  const[title, setTitle] = useState("");

  useEffect(() => {
  if (editTodo) {
    setTitle(editTodo.title);
  }
}, [editTodo]);

  const handleAdd = async() =>{
    if(!title.trim()) return;
    if(editTodo){
        const response = await fetch(
      `https://to-do-list-irb2.onrender.com/todos/${editTodo._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          status: editTodo.status
        })
      }
    );
    const updatedTodo = await response.json()

     setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === updatedTodo._id ? updatedTodo : todo
      )
    );
     setEditTodo(null);
    setTitle("");
    }
    else{
    const response = await fetch("https://to-do-list-irb2.onrender.com/todos",{
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
    setTitle("")
  }
}

  return (
    <div className="todo-input">
      <input type="text" value={title} onChange={((e)=> setTitle(e.target.value))} placeholder="Enter the task" />
     <button className="AddBtn" onClick={handleAdd}>
  {editTodo ? "UPDATE" : "ADD"}
</button>
    </div>
  );
}

export default TodoInput;
