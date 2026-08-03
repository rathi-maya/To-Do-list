import TodoItem from "./TodoItem";

function TodoList() {
  const todo = [
    { id: 1, title: "React js", status: "Completed" },
    { id: 2, title: "CSS" , status: "Not completed"},
     { id: 3, title: "CSS" , status: "Not completed"}
  ];

   const item = todo.map((todo)=>
  <TodoItem key={todo.id} title={todo.title} status={todo.status}/>)

  return (
  <ul>
    {todo.map((todo) => (
      <TodoItem
        key={todo.id}
        title={todo.title}
        status={todo.status}
      />
    ))}
  </ul>
);
}

export default TodoList;
