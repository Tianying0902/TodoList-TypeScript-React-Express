
import React from 'react';
import "../style/TodoList.css"
import { TodoItem } from './TodoItem';
import { Todo,DeleteTodo,MarkTodo ,EditTodo} from '../types';

interface TodoListProps {
todoData:Array<Todo>;
deleteTodo:DeleteTodo;
markTodo:MarkTodo;
editTodo:EditTodo;
} 
export const TodoList:React.FC<TodoListProps>=({todoData,deleteTodo,markTodo,editTodo})=>{
    return (<div className='todo-list'>
{todoData.map(todo=>(<TodoItem todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} markTodo={markTodo}/>))}
    </div>)
};