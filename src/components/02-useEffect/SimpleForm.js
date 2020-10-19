import React, { useEffect, useState } from 'react'
import './../components.css'
import { Messages } from './Messages';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    //Este effect solo se ejecuta cuando carga la app
    useEffect(()=>{
        // console.log('Hey!');
    }, []);

    //Este se ejecutara siempre que cambie cualquier valor en el form
    useEffect(() => {
        // console.log('Form State cambio')        
    }, [formState])

    
    //Este se ejecutara solo cuando cambia el email
    useEffect(() => {
        // console.log('Email cambio')        
    }, [email])

    const handleInputChange = ({target})=>{
        
        setFormState(
            {
                ...formState,
                [target.name]:target.value
            }
        )
    }

    return (
        <div>
            <h1>UseEffect</h1>
            <hr/>

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre aquí"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
                
            <div className="form-group">
                <input 
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Tu email aquí"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name === '123') && <Messages />}
        </div>
    )
}
