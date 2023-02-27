import { useState,useEffect} from 'react';
import {TodoHeader} from './components/TodoHeader'
import axios from 'axios';
import './App.css';
import { ITodo,ShowAllTodos,ShowActiveTodos,ShowCompletedTodos,DeleteTodo,AddTodo,MarkTodo,EditTodo,ClearCompletedTodos} from './types';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { TodoFilterButtons } from './components/TodoFilterButtons';

function App() {
  useEffect(() => {
    // Update the tasks
    console.log(tasks)
  });
  const [tasks,setTasks] = useState<Array<ITodo>>([]);
  
const showAllTodos:ShowAllTodos=()=>{
  axios
  .get(`http://localhost:3001`)
  .then((response) => {setTasks(response.data)}).catch((err)=>console.log(err.response.data));
}
 const showActiveTodos:ShowActiveTodos =()=>{
 axios
  .get(`http://localhost:3001/active`)
  .then((response) => {setTasks(response.data)}).catch((err)=>console.log(err.response.data));
  // console.log(tasks);
}
const showCompletedTodos:ShowCompletedTodos =()=>{
  axios
   .get(`http://localhost:3001/completed`)
   .then((response) => {setTasks(response.data)}).catch((err)=>console.log(err.response.data));
  //  console.log(tasks);
 }
 const deleteTodo:DeleteTodo =(id:number)=>{
  axios
  .delete(`http://localhost:3001/${id}`)
  .then(() => {
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
        .then(() => {
          showAllTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    } 
    else{
      axios
        .put(`http://localhost:3001/${id}`, { completed: 0 })
        .then(() => {
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
  .then(() => {
    showAllTodos();
  })
  .catch((error) => {
    console.log(error);
  });
}
const clearCompletedTodos:ClearCompletedTodos=() =>{
  axios
  .delete(`http://localhost:3001`)
  .then(() => {
    showAllTodos();
}).catch((error) => {console.log(error);});}
  return (
    <div className="my-app">
        <TodoHeader/>
        <TodoForm addTodo={addTodo}/>
        <TodoList editTodo={editTodo} todoData={tasks} deleteTodo={deleteTodo} markTodo={markTodo}/>
        <TodoFilterButtons clearCompletedTodos={clearCompletedTodos} todos={tasks} showActiveTodos={showActiveTodos} showAllTodos={showAllTodos} showCompletedTodos={showCompletedTodos}/>
    </div>
  );
}

export default App;
