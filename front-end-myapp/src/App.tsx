import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Todo,ShowAllTodos,ShowActiveTodos,ShowCompletedTodos,DeleteTodo,AddTodo,MarkTodo,EditTodo} from './types';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

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
 const deleteTodo:DeleteTodo =(id:number)=>{
  axios
  .delete(`http://localhost:3001/${id}`)
  .then((response) => {
    console.log(response);
    showAllTodos();
  })
  .catch((error) => {
    console.log(error);
  });
 }
 const addTodo:AddTodo =(newTodo:string)=>{
  axios
    .post("http://localhost:3001", {
      task: newTodo,
      completed: false,
    })
    .then(function (response) {
      showAllTodos();
    })
    .catch(function (error) {
      console.error(error);
    });
};
const markTodo:MarkTodo =(id:number)=>{
  axios
  .get(`http://localhost:3001/${id}`)
  .then((response) => {
    if (response.data[0].completed === 0) {
      axios
        .put(`http://localhost:3001/${id}`, { completed: 1 })
        .then((response) => {
          console.log(response.data);
          showAllTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    } 
    if(response.data[0].complete === 1) {
      axios
        .put(`http://localhost:3001/${id}`, { completed: 0 })
        .then((response) => {
          console.log(response.data);
          showAllTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  })
  .catch((error) => {
    console.log(error);
  });
};
const editTodo:EditTodo =(id:number,value:string) => {
  axios
  .put(`http://localhost:3001/${id}`, { task: value })
  .then((response) => {
    console.log(response);
    showAllTodos();
  })
  .catch((error) => {
    console.log(error);
  });
}

  return (
    <div className="App">
        <h1>todos</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList editTodo={editTodo} todoData={tasks} deleteTodo={deleteTodo} markTodo={markTodo}/>
        <button onClick={showAllTodos}>All</button>
        <button onClick={showActiveTodos}>Active</button>
        <button onClick={showCompletedTodos}>Completed</button>

    </div>
  );
}

export default App;
