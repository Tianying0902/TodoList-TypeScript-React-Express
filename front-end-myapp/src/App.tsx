import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Todo,ShowAllTodos } from './types';

function App() {
  const [tasks,setTasks] = useState<Array<Todo>>([]);
const showAllTodos:ShowAllTodos =()=>{
  axios
  .get(`http://localhost:3001`)
  .then((response) => {setTasks(response.data)});
  console.log(tasks);
  
}
  return (
    <div className="App">
        <h1>todos</h1>
        <button onClick={showAllTodos}>All</button>
    </div>
  );
}

export default App;
