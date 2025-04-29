import { useState } from 'react'
import Navbar from './assets/componenets/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [ todo, setTodo]=useState(""); 
  const [ todos, setTodos]=useState([]); 

  const handleEdit = ( )=>{
    

  }

  const handleDelete = (e, id)=>{

    console.log(id)
  
    
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }
    )
   
    setTodos (newTodos)
  }
  const handleAdd = ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false} ])
    console.log(todos);
    setTodo("")
  }

  const handleChange=(e)=>{

    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index= todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos (newTodos)
   }
  
  

  return (
    <>
      <Navbar/> 

      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
          <div className="addTodo my-5">
            <h2 className='text-lg font-bold'> Add a todo</h2>
            <input onChange={handleChange} value={todo} type='text' className='w-1/2 border' />
            <button onClick={handleAdd}  className='bg-violet-800 text-white hover:bg-violet-950 py-1 p-2 text-sm font-bold mx-6 rounded-md'>Add</button>
          </div>
          <h2 className='text-xl font-bold'>Your todos</h2>
          <div className='todos'>
            {todos.length === 0 && <div> No ToDos to display </div>}

            {todos.map(item=>{

           return <div key={item.id} className="todo flex w-1/4 my-3 justify-between">

            <div className='flex'>

              <input name={item.id} onChange={handleCheckbox} type='checkbox' value={item.isCompleted} id=""/>
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
              <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 text-white hover:bg-violet-950 py-1 p-2 text-sm font-bold mx-1 rounded-md'>Edit</button>
              <button onClick={(e)=>{handleDelete (e, item.id)}}className='bg-violet-800 text-white hover:bg-violet-950 py-1 p-2 text-sm font-bold mx-1 rounded-md'>Delete</button>
            </div> 
          </div> 
            })}
        </div>
      </div>
    </>
  )
}

export default App
