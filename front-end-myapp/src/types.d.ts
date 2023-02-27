
import {type} from 'os';
type ITodo = {id:number,task:string,completed:boolean}
type ShowAllTodos =()=>void;
type ShowActiveTodos=()=>void;
type ShowCompletedTodos=()=>void;
type DeleteTodo=(id:number)=>void;
type MarkTodo=(id:number)=>void;
type AddTodo=(newTodo:string)=>void;
type EditTodo = (id:number,value:string)=>void;
type ClearCompletedTodos=()=>void;
