import "../styles/TodoInput.css";

function TodoInput() {
  return (
    <div className="todo-input">
      <input type="text" placeholder="Enter the task" />
      <button>ADD</button>
    </div>
  );
}

export default TodoInput;
