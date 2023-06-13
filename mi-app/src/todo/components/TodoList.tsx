//import { useContext } from "react"
//import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../hooks/useTodos";


export const TodoList = () => {

    //const { todoState } = useContext( TodoContext );
    //const { todos } = todoState; 

    const { todos } = useTodos(); //Mejor usar el customhook

    console.log( todos );    


    return (
        <ul>
            {
                todos.map( todo => <TodoItem todo={ todo } key={ todo.id } /> )            
            }
        </ul>
    )
}
