import React , {MouseEvent,ChangeEvent,useState,KeyboardEvent,useRef} from 'react'
import "../style/TodoItem.css"
import { DeleteTodo, ITodo,MarkTodo ,EditTodo} from '../types';
interface TodoItemProps {
    todo:ITodo;
    deleteTodo:DeleteTodo;
    markTodo:MarkTodo;
    editTodo:EditTodo;
}
export const TodoItem:React.FC<TodoItemProps> = ({todo,deleteTodo,markTodo,editTodo})=>{
    const [getSearchVal, SetGetSearchVal] = useState('');
    const [edited,setEdited] = useState(true);
    const editedValue = useRef(null);
    const getIptValue = (event: { target: { value: string } }) => {
        SetGetSearchVal(event.target.value);
      };
    const handleDelete = (e:MouseEvent<HTMLButtonElement>) => {
        deleteTodo(todo.id)
    }
    const handleEdit = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            setEdited(!edited);
            editTodo(todo.id, getSearchVal);
          }
    }
    const handleMark = (e:ChangeEvent<HTMLInputElement>) => {
markTodo(todo.id);
    }
  return ( <div className='todo-item' key={todo.id}>
  <input className='check-box' onChange={handleMark} type="checkbox" checked={todo.completed}/>
  {edited?
  <span className={todo.completed?"completed-todo":"wait-todo"} onDoubleClick={()=>{setEdited(!edited)}}>{todo.task}</span>:
  <input className='edited-box' defaultValue={todo.task} type="text" onChange={getIptValue} ref={editedValue} onKeyDown={handleEdit}/>}
  <span className='delete-btn' onClick={handleDelete}>x</span>
  </div>
);
}