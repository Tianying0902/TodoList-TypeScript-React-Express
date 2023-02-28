import { createContext } from "react";
import {ITodo} from "../types";
export const TodosContext = createContext<ITodo[]>([]);