import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import "./App.css"

function App() {
  const [todo, settodo] = useState("") //ek todo ke liye
  const [todos, settodos] = useState([]) //ye sare todo ko hold krega

  useEffect(() => {
    let todoString=localStorage.getItem("todos")
    if(todoString){
      let todos=JSON.parse(localStorage.getItem("todos"))
      settodos(todos)

    }
  }, [])
  

 const saveToLS=()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
 }

  

const handleCheck = (index) => {
  const newtodolist = [...todos]
  newtodolist[index].isCompleted = !newtodolist[index].isCompleted
  settodos(newtodolist);
  saveToLS();
}
  const handleEdit=()=>{

  }
  const handleDelete=(index)=>{
   const newTodos = todos.filter((_, i) => i !== index);
   settodos(newTodos)
     saveToLS();

  }
  const handleAdd=()=>{
    settodos([...todos,{todo,isCompleted:false}])
    saveToLS();
    settodo("")

  }
  const handleChange=(e)=>{
    settodo(e.target.value)

  }

  return (
    <>
     <Navbar/>
     <div className="container mx-auto bg-violet-100  p-6 min-h-auto px-10">
      <p className='text-red-600 font-bold'>* Add last task as useless as last task will not be saved</p>
        <h2 className='text-xl font-bold p-2'>Add Todo</h2>
      <div className="addtodo flex gap-2">
        
        <input onChange={handleChange} value={todo}  className='bg-white min-w-[71vw] px-3 text-lg' type="text" />
        <button onClick={handleAdd} className='bg-violet-300 py-1.5 px-7 rounded-full font-bold hover:text-white hover:cursor-pointer'> Add </button>
      </div>
     <h1 className='font-bold text-xl flex justify-center mt-5'>Your Todos</h1>
     <div className="todos ">
      {todos.map((item,index)=>{
        return<div key={index} className='todocheck flex  mt-4 justify-between'>
        <div key={index} className="todo flex text-center  gap-4 text-lg font-bold ">
          <input onChange={()=>handleCheck(index)} type="checkbox" value={todo.isCompleted} name="check" id="check" />
      <div className={item.isCompleted?"line-through text-gray-500 ":""}>{item.todo}</div>
      </div>
      <div className="buttons flex gap-2">
        {/* <button onClick={()=> handleEdit(index)} className='bg-violet-300 py-1.5 px-7 rounded-full font-bold hover:text-white hover:cursor-pointer'>Edit</button> */}
        <button onClick={()=>handleDelete(index)} className='bg-violet-300 py-1.5 px-7 rounded-full font-bold hover:text-white hover:cursor-pointer'>Delete</button>
      </div>
      </div>
       })}
     </div>
     </div>
    </>
  )
}

export default App
