import React, { useState } from 'react'
import TodoList from './components/TodoList'
import { useSelector, useDispatch } from "react-redux";
import { addToToDoList } from './actions/todoList';
const App = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);
  const [todoText, setTodoText] = useState()
  const onChange = (e) => {
    setTodoText(e.target.value)
  }
  const handleClick = () => {
    dispatch(addToToDoList(todoText));
  }

  return (
    <div>
      <TodoList todos={todoList} onTodoClick={console.log("test")} />
      <input onChange={(e) => onChange(e)}></input>
      <button onClick={() => handleClick()}>Add</button>
    </div>
  )
}

export default App
