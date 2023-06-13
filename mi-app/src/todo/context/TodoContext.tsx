import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: ( id_: string) => void;
}

//{} as TodoContextProps para evitar errores
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);