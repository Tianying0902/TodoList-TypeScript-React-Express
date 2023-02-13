
import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo,DeleteTodo } from '../types';

interface TodoListProps {
todoData:Array<Todo>;
deleteTodo:DeleteTodo;
} 
export const TodoList:React.FC<TodoListProps>=({todoData,deleteTodo})=>{
    return (<div className='todo-list'>
{todoData.map(todo=>(<TodoItem todo={todo} deleteTodo={deleteTodo}/>))}
    </div>)
};