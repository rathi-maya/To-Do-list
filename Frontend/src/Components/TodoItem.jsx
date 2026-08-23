import "../styles/TodoItem.css"

function TodoItem(props) {

  const handleDelete = async ()=>{
        await fetch(`http://localhost:500/todos/${props.id}`,{
          method: "DELETE"
        })
        console.log("deleted");
  }
  return (
    <div className="todo-item">
        <div className="task">
        <input
          type="checkbox"
          checked={props.status === "Completed"}
          onChange={() => console.log("clicked")}
        />
        <span className={props.status === "Completed" ? "Completed" : "notCompleted"}>{props.title}</span>
      </div>
       <div>
       <button className="EditBtn" >Edit</button>
       <button onClick={()=>handleDelete()} className="DeleteBtn">Delete</button>
       </div>
    </div>
  )
}

export default TodoItem