import { useState } from "react"

interface User {
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: 'Qwertty',
    name: 'TempUser'
}

export const Usuario = () => {

    const [user, setUser] = useState<User>(tempUser);

    const login = () => {
        setUser({
            uid: 'ABC1213',
            name: 'Julio Chacon'
        });
    }

    return (
        <div>
            <h3>Usuario</h3>

            <button
                onClick={ login }
                className='btn btn-outline-primary mt-2'
            >
                Login

            </button>

            {
                (!user)
                    ? <pre className="mt-2">No hay usuario</pre>
                    : <pre className="mt-2">{ JSON.stringify( user )}</pre>
            }

        </div>
    )
}
