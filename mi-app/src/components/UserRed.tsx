import { useReducer } from "react";

const initialState = {
    username: '',
    edad: 0,
    posicion: ''
}

type ActionType =
    | { type: 'establecer', payload: string }
    | { type: 'borrar' }
    

const userReducer = ( state: typeof initialState, action: ActionType) => {
    switch ( action.type ) {
        case 'establecer':           
            return {
                ...state,
                username: 'julio.chacon',
                edad: 28,
                posicion: action.payload
            }; 
        case 'borrar':           
            return {
                ...state,
                username: '',
                edad: 0,
                posicion: ''
            };                
        default:
            return state;
    }
}

export const UserRed = () => {

    const [userState, dispatch] = useReducer(userReducer, initialState);
    
    return (
        <>
            <h2>User: </h2>
            <pre>{JSON.stringify(userState)}</pre>
            <button
                onClick={ () => dispatch({ type:'establecer', payload: 'mediocampo'})}
                className="btn btn-outline-primary"
            >
                Establecer
            </button>
            <button onClick={ () => dispatch({ type:'borrar'}) } className="btn btn-outline-danger">Borrar</button>
        </>
    )
}
