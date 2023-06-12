import { useForm } from "../hooks/useForm"


interface FormData {
    zipcode: string;
    city: string;
    prefix: number
}

export const Formulario2 = () => {

    //Se establecen valores por default para el initialState
    //Además se declara el tipo de dato del initial state con el <FormData>
    //const { formulario, handleChange } = useForm<FormData>({

    //Con el ...state que está en el return del hook puedo obtener los valores
    //desestructurados y ahorro esas líneas
    const { zipcode, city, formulario, handleChange } = useForm<FormData>({
        zipcode: '03003',
        city: 'Trujillo',
        prefix: 51
    });

    //Esto lo obtengo con el state que retorna mi hook
    //const { zipcode, city, prefix } = formulario;


    return (
        <form autoComplete='off'>
            <div className="mb-3 mt-2">
                <label className='form-label'>Zipcode:</label>
                <input
                    type='text'
                    className='form-control'
                    name='zipcode'
                    //Para que aparezcan en el input y tengan el valor
                    //que se les asignó en el initialState
                    value={ zipcode }
                    onChange={ handleChange }
                />
            </div>

            <div className="mb-3 mt-2">
                <label className='form-label'>City:</label>
                <input
                    type='text'
                    className='form-control'
                    name='city'
                    value={ city }
                    onChange={ handleChange }
                />
            </div>

            <pre>{ JSON.stringify(formulario) }</pre>


        </form>
    )
}
