import React from 'react'
import InputTodo from './InputTodo'
import TodoCard from './TodoCard'

const TodoList = (props) => {
    const {todos} = props
  return (
    
       <div className='list'>
{todos.map((todo,IndexTodo) =>{
    return (
        <header key={IndexTodo}>
            <TodoCard {...props} key = {IndexTodo} index = {IndexTodo}>
           <h2> {todo}</h2>
           </TodoCard>
        </header>
    )
})}
       </div>
    
  )
}

export default TodoList