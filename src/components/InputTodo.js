import React from 'react'

const InputTodo = (props) => {
  const {handleAddTodo, todoValue,setTodoValue} = props
    
  return (
    <div>
      <input value={todoValue} onChange={(event)=>{
        setTodoValue(event.target.value)
      }} placeholder='Enter todo...'/>
      <button onClick={()=>{handleAddTodo(todoValue)
        {setTodoValue("")}}}>Add </button>
    </div>
  )
}

export default InputTodo