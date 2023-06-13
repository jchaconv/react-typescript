import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces"
import { useContext } from "react";

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    //const { toggleTodo } = useContext( TodoContext );

    const { toggleTodo } = useTodos();

    /*const handleDoubleClick = () => {
        //console.log('handleDoubleClick: ', todo.desc);
        toggleTodo( todo.id );
    }*/

    return (
        <li
            // onDoubleClick={handleDoubleClick}
            onDoubleClick={ () => toggleTodo( todo.id ) }
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
        >
            {todo.desc}
        </li>
    )
}
