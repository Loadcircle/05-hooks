import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './../components.css'


export const FormWithCustomHooks = () => {

    const [formValues, setFormValues] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambo')
    }, [email])

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
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
                    onChange={setFormValues}
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
                    onChange={setFormValues}
                />
            </div>
            
            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Tu contraseña aquí"
                    autoComplete="off"
                    value={password}
                    onChange={setFormValues}
                />
            </div>

            <button className="btn btn-primary">Guardar</button>
            
        </form>
    )
}
