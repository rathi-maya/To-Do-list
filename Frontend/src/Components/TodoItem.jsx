function TodoItem(props) {
  return (
    <div>
       <p>{props.title}</p>
       <button>Edit</button>
       <button>Delete</button>
    </div>
  )
}

export default TodoItem