import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Todo,ShowAllTodos,ShowActiveTodos,ShowCompletedTodos} from './types';
import { TodoList } from './components/TodoList';

function App() {
  const [tasks,setTasks] = useState<Array<Todo>>([]);
const showAllTodos:ShowAllTodos =()=>{
  axios
  .get(`http://localhost:3001`)
  .then((response) => {setTasks(response.data)});
  console.log(tasks);
}
 const showActiveTodos:ShowActiveTodos =()=>{
 axios
  .get(`http://localhost:3001/active`)
  .then((response) => {setTasks(response.data)});
  console.log(tasks);
}
const showCompletedTodos:ShowCompletedTodos =()=>{
  axios
   .get(`http://localhost:3001/completed`)
   .then((response) => {setTasks(response.data)});
   console.log(tasks);
 }
  return (
    <div className="App">
        <h1>todos</h1>
        <TodoList todoData={tasks}/>
        <button onClick={showAllTodos}>All</button>
        <button onClick={showActiveTodos}>Active</button>
        <button onClick={showCompletedTodos}>Completed</button>

    </div>
  );
}

export default App;
