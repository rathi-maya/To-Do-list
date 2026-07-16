import { useState } from "react"
import InputBox from "./InputBox"

function Header() {
  const [todos, setTodos] = useState([])
  return (  
    <div className="min-h-screen flex justify-center items-center bg-[#1d2a63]">
    <div className="bg-[#1f2f6f]  h-auto w-100  shadow-2xl rounded-2xl">
        <h1 className="m-5 text-xl text-white">To-Do List</h1>
        <InputBox/>
        {
          (todos.length === 0)?<div>
              <h2 className="text-2xl flex justify-center mt-5 mb-5 text-white">No Record</h2>
          </div>:
          todos.map(todo =>{
           <div>
                {todo}
           </div>
          })
        }
    </div>
    </div>
  )
}

export default Header