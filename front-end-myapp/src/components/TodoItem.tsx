import React , {MouseEvent,ChangeEvent,useState,KeyboardEvent,useRef} from 'react'
import { DeleteTodo, Todo,MarkTodo ,EditTodo} from '../types';
interface TodoItemProps {
    todo:Todo;
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
  return ( <div key={todo.id}>
  <input onChange={handleMark} type="checkbox" checked={todo.completed}/>
  {edited?
  <span className={todo.completed?"completed-todo":"wait-todo"} onDoubleClick={()=>{setEdited(!edited)}}>{todo.task}</span>:
  <input defaultValue={todo.task} type="text" onChange={getIptValue} ref={editedValue} onKeyDown={handleEdit}/>}
  <button className='delete-btn' onClick={handleDelete}>delete</button>
  </div>
);
}