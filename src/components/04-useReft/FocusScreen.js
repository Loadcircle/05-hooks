import React, { useRef } from 'react'
import './../components.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = (e)=>{
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                ref={inputRef}
                className="form-control"
                placeholder="Tu nombre"
            />
            <button 
                className="btn btn-outline-primary mt-2"
                onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
