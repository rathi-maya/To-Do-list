import TodoItem from "./TodoItem";
import {useEffect} from "react";

function TodoList({todos, setTodos}) {
  useEffect(() => {
          const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/todos");

        const data = await response.json();

        setTodos(data);
      } catch (error) {
        console.log("Error fetching todos:", error);
      }
    };

    fetchTodos();
}, [setTodos]);

  return (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo._id}
        id={todo._id}
        title={todo.title}
        status={todo.status}
         setTodos={setTodos}
      />
    ))}
  </ul>
);
}

export default TodoList;
