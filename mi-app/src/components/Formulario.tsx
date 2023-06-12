import { ChangeEvent, useState } from "react"

export const Formulario = () => {

    //Aquí está tomando como initial state un objeto creado directamente en el useState
    const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    });

    //Lo que se recibe aquí es un event que contiene target, por eso se realiza la desestructuración.
    //En este caso se tiene que declarar el tipo de valor del event, es ChangeEvent y en el genérico le ponemos
    //HTMLInputElement porque ese event sale de un input.

    const handleChange = ( {target}: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        
        setFormulario({
            ...formulario,
            [ name ]: value //Esto es una variable computada, proviene de la propiedad name en el input
        });     
    }

    return (
        <form autoComplete='off'>
            <div className="mb-3 mt-2">
                <label className='form-label'>Email:</label>
                <input
                    type='email'
                    className='form-control'
                    name='email'
                    onChange={ handleChange } //No se necesita poner onChange={ (ev) => handleChange(ev) }
                />
            </div>

            <div className="mb-3 mt-2">
                <label className='form-label'>Nombre:</label>
                <input
                    type='text'
                    className='form-control'
                    name='name'
                    onChange={ handleChange }
                />
            </div>

            <pre>{ JSON.stringify(formulario) }</pre>


        </form>
    )
}