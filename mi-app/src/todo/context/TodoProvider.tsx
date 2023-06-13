import { useReducer } from 'react'
import { TodoContext } from './TodoContext'
import { TodoState } from '../interfaces/interfaces'
import { todoReducer } from './todoReducer'

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id:'1',
            desc: 'Conseguir gema del poder',
            completed: false
        },
        {
            id:'2',
            desc: 'Conseguir gema del espacio',
            completed: false,
        }

    ],
    completed: 0,
    pending: 2
}

//Se pone el arreglo porque si en el componente hay más de un elemento sale error
//por ejemplo si hay un h1 y un div sale error. Si hay solo un h1 solo toma bien.
interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = ( id: string ) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }

    return (
        // Para retornar todo el state en el provider
        //Esto sirve para que todos los hijos tengan acceso a la info
        <TodoContext.Provider value={{
            todoState,
            toggleTodo        
        }}        
        >
            { children }
        </TodoContext.Provider>
    )
}
