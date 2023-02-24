import React,{ChangeEvent, useState,FormEvent} from 'react';
import { AddTodo } from '../types';
import "../style/TodoForm.css"
interface TodoFormProps {
    addTodo:AddTodo;
}

export const TodoForm:React.FC<TodoFormProps> = ({addTodo}) => {
    const [newTodo,setNewTodo] = useState<string>("");
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }
    const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        if(newTodo){
            addTodo(newTodo);
        }else {
            alert("Please enter your new Todo");
        }
        setNewTodo("");
    }
    return (
<form className='todo-form'>
    <input className='input-content' type='text' value={newTodo} onChange={handleChange} placeholder="what's the next?"/>
    <button className='submit-btn' type='submit' onClick={handleSubmit}>Add new text</button>
</form>
    )
}