import "../styles/TodoItem.css"

function TodoItem(props) {

  const handleDelete = async ()=>{
        const response = await fetch(`http://localhost:5000/todos/${props.id}`,{
          method: "DELETE"
        })
        if(response .ok){
          props.setTodos((prevTodos)=>
          prevTodos.filter((item)=>item._id !== props.id))
        }
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