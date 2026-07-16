import { useState } from "react";
import axios from "axios"

function InputBox() {
  const[task, setTask] = useState()
  const handleAdd =()=>{
      axios.post("http:/localhost:3000/add", {task:task}).then(result => console.log(result)).catch(err => console.log(err))
  }
  return (
    <div>
        <input type="text" className="font-semibold text-sm text-gray-200 p-1 border border-gray-600 w-70 ml-5 mr-5 rounded-sm" placeholder="Please Enter a New Task" />
        <button className=" text-sm text-white font-medium bg-amber-300 pl-3 pr-3 border p-1 border-amber-300 rounded-sm cursor-pointer" onClick={(e)=>setTask(e.target.value)}>ADD</button>
    </div>
  )
}

export default InputBox