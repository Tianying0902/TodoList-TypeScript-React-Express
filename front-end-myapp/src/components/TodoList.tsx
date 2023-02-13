
import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from '../types';

interface TodoListProps {
todoData:Array<Todo>;
} 
export const TodoList:React.FC<TodoListProps>=({todoData})=>{
    return (<div className='todo-list'>
{todoData.map(todo=>(<TodoItem todo={todo}/>))}
    </div>)
};