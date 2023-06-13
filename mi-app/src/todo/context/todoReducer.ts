import { Todo, TodoState } from "../interfaces/interfaces";

type TodoActions =
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string } }; //este payload

export const todoReducer = (state: TodoState, action: TodoActions) => {

    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [ ...state.todos, action.payload ] //retornar un nuevo todo
            }
        case 'toggleTodo':            
            return {
                ...state,
                //para hacer una copia de todas las propiedades
                //si se deja solo como (todo) hace una copia y no funciona bien
                todos: state.todos.map( ({...todo}) => {
                    if( todo.id === action.payload.id ) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }            
    
        default:
            return state;
    }

}