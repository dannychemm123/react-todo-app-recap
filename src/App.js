
import './App.css';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import InputTodo from './components/InputTodo';
//import logo from "./images/logo7.png"




function App() {
  const [todos, setTodoList] = useState([])

const PersistData  = (newList)=>{
  localStorage.setItem("todos", JSON.stringify({todos: newList}))
}

const handleAddTodo = (newTodos) =>{
  if (newTodos.trim() !== "") { 
    const newTodosList = [newTodos, ...todos];
    PersistData(newTodosList)
    setTodoList(newTodosList);
  }
  }

  const handleDeleteTodo = (index) => {
    const newTodosList = todos.filter((todo,IndexTodo)=>{
      return IndexTodo !== index

    })
    PersistData(newTodosList)
    setTodoList(newTodosList)
    

  }
  const handleEditTodo =(index)=>{
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  
  const [todoValue, setTodoValue] = useState("")

  useEffect(()=>{
    if (!localStorage) 
      return
    let localTodos = localStorage.getItem("todos")
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodoList(localTodos)

  },[])

  return (
    <div className="App">
      <InputTodo todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddTodo = {handleAddTodo}></InputTodo>
      <TodoList todos = {todos} handleDeleteTodo = {handleDeleteTodo}  handleEditTodo = {handleEditTodo}></TodoList>
      
    </div>
  );
}

export default App;
