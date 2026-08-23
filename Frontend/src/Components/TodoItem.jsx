import "../styles/TodoItem.css"

function TodoItem(props) {

  const handleDelete = async ()=>{
        const response = await fetch(`https://to-do-list-irb2.onrender.com/todos/${props.id}`,{
          method: "DELETE"
        })
        if(response .ok){
          props.setTodos((prevTodos)=>
          prevTodos.filter((item)=>item._id !== props.id))
        }
  }

  const handleStatusChange = async () => {
  const newStatus =
    props.status === "Completed"
      ? "Not completed"
      : "Completed";

  const response = await fetch(
    `https://to-do-list-irb2.onrender.com/todos/${props.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: props.title,
        status: newStatus
      })
    }
  );

  const updatedTodo = await response.json();

  props.setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo._id === updatedTodo._id ? updatedTodo : todo
    )
  );
};


  return (
    <div className="todo-item">
        <div className="task">
        <input
          type="checkbox"
          checked={props.status === "Completed"}
          onChange={() => handleStatusChange()}
        />
        <span className={props.status === "Completed" ? "Completed" : "notCompleted"}>{props.title}</span>
      </div>
       <div>
       <button onClick={()=>props.setEditTodo({
        _id: props.id,
        title: props.title,
        status: props.status
       })} className="EditBtn" >Edit</button>
       <button onClick={()=>handleDelete()} className="DeleteBtn">Delete</button>
       </div>
    </div>
  )
}

export default TodoItem