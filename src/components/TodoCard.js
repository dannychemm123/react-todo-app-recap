import React from 'react'

const TodoCard = (props) => {
  const {children, index,handleDeleteTodo,handleEditTodo} = props
  return (
    <div className='todoItem'>
      {children}
       <div className='actionContainer'>
        <button onClick={()=>{handleEditTodo(index)}}>
       <i className="fa-regular fa-pen-to-square"></i>
       </button>
       <button onClick={()=>{handleDeleteTodo(index)}}>
       <i className="fa-solid fa-trash-can"></i>
       </button>
       {/*<button>
       <i class="fa-solid fa-square-check"></i>
       </button>*/}

       </div>
    </div>
  )
}

export default TodoCard