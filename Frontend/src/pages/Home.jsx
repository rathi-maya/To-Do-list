import Header from "../components/Header.jsx";
import TodoInput from "../components/TodoInput.jsx";
import TodoList from "../components/TodoList.jsx";

function Home() {
  console.log("hoem")
  return (
    <>
    <Header/>
     <TodoInput/>
     <TodoList/>
    </>
  )
}

export default Home