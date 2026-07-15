function Header() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1d2a63]">
    <div className="bg-[#1f2f6f]  h-100 w-100  shadow-2xl rounded-2xl">
        <h1 className="m-5 text-xl text-white">To-Do List</h1>
        <input type="text" className="font-semibold text-sm text-gray-200 p-1 border border-gray-600 w-70 ml-5 mr-5 rounded-sm" placeholder="Please Enter a New Task" />
        <button className=" text-sm text-white font-medium bg-amber-300 pl-3 pr-3 border p-1 border-amber-300 rounded-sm cursor-pointer">ADD</button>
    </div>
    </div>
  )
}

export default Header