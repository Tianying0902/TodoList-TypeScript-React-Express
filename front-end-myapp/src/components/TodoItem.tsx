import React , {MouseEvent,ChangeEvent} from 'react'
import { DeleteTodo, Todo,MarkTodo } from '../types';
interface TodoItemProps {
    todo:Todo;
    deleteTodo:DeleteTodo;
    markTodo:MarkTodo;
}
export const TodoItem:React.FC<TodoItemProps> = ({todo,deleteTodo,markTodo})=>{
    const handleDelete = (e:MouseEvent<HTMLButtonElement>) => {
        deleteTodo(todo.id)
    }
    const handleMark = (e:MouseEvent<HTMLInputElement>) => {
markTodo(todo.id);
    }
  return (<div>
    <input type="checkbox" checked={todo.completed} onClick={handleMark}
     defaultValue={todo.task}/>
    <span className={todo.completed?"completed-todo":"active-todo"}>{todo.task}</span><button onClick={handleDelete}>delete</button></div>);
}