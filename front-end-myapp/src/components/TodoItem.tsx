import React, { useState } from 'react'
import { Todo } from '../types';
interface TodoItemProps {
    todo:Todo;
}
export const TodoItem:React.FC<TodoItemProps> = ({todo})=>{
  return (<div>
    <input type="checkbox" checked={todo.completed}/>
    {todo.task}<button>delete</button></div>);
}