import {type} from 'os';
type MySqlConnection = () => Object;
type QueryPromise = (query:string,fn:Function) => void;