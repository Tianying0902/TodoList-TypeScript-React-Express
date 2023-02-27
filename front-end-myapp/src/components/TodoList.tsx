
import React from 'react';
import "../style/TodoList.css"
import { TodoItem } from './TodoItem';
import { ITodo,DeleteTodo,MarkTodo ,EditTodo} from '../types';

interface TodoListProps {
todoData:Array<ITodo>;
deleteTodo:DeleteTodo;
markTodo:MarkTodo;
editTodo:EditTodo;
} 
export const TodoList:React.FC<TodoListProps>=({todoData,deleteTodo,markTodo,editTodo})=>{
    return (<div className='todo-list'>
{todoData.map(todo=>(<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} markTodo={markTodo}/>))}
    </div>)
};