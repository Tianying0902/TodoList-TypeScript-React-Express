import React , {MouseEvent} from 'react'
import { DeleteTodo, Todo } from '../types';
interface TodoItemProps {
    todo:Todo;
    deleteTodo:DeleteTodo;
}
export const TodoItem:React.FC<TodoItemProps> = ({todo,deleteTodo})=>{
    const handleDelete = (e:MouseEvent<HTMLButtonElement>) => {
        deleteTodo(todo.id)
    }
  return (<div>
    <input type="checkbox" checked={todo.completed} onChange={()=>console.log('heirhie')}
     defaultValue={todo.task}/>
    {todo.task}<button onClick={handleDelete}>delete</button></div>);
}