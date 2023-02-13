import { AxiosResponse } from 'axios';
import {type} from 'os';
type Todo = {id:number,text:string,completed:boolean}
type ShowAllTodos =()=>void;
type ShowActiveTodos=()=>void;
type ShowCompletedTodos=()=>void;
