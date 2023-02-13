
import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo,DeleteTodo,MarkTodo } from '../types';

interface TodoListProps {
todoData:Array<Todo>;
deleteTodo:DeleteTodo;
markTodo:MarkTodo;
} 
export const TodoList:React.FC<TodoListProps>=({todoData,deleteTodo,markTodo})=>{
    return (<div className='todo-list'>
{todoData.map(todo=>(<TodoItem todo={todo} deleteTodo={deleteTodo} markTodo={markTodo}/>))}
    </div>)
};