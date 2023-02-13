
import React,{ChangeEvent, useState,FormEvent} from 'react';
import { AddTodo } from '../types';
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
        addTodo(newTodo);
        setNewTodo("");
    }
    return (
<form>
    <input type='text' value={newTodo} onChange={handleChange} placeholder="what's the next?"/>
    <button type='submit' onClick={handleSubmit}>Add new text</button>
</form>
    )
}