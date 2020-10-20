import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    
    const  [formValues, handleInputChange, reset] = useForm({
        description: '',
    });
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(formValues.description.trim().length <= 2){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: formValues.description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO'S</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Tarea"
                    autoComplete="off"
                    value={formValues.description}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block">
                    Agregar
                </button>
            </form>                
        </>
    )
}
