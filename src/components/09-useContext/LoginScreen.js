import React, {useContext} from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    const newUser = {
        id: 4,
        name: 'Jesus Milano',
        email: 'jesus.milano@valiapro.com'
    }
    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={()=>{ setUser(newUser) }}
            >
                Login
            </button>
        </div>
    )
}
