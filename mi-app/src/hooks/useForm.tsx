import { ChangeEvent, useState } from "react";


//Se crea como función para ponerle los genéricos
//export function useForm<T> ( initialState: T ) {

//Pero también se pueden usar genéricos en funciones de flecha de esta manera:
export const useForm = <T extends Object>(initialState: T) => {

    //Se recibe un initialState de tipo any porque puede tener distintos campos
    const [formulario, setFormulario] = useState(initialState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    //Exportamos el state y la función para setear el value en el input
    return {
        formulario,
        handleChange,
        ...formulario //Para retornar los valores del formulario desestructurados
    }

}