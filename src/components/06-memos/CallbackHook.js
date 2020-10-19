import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement';
import './../components.css';

export const CallbackHook = () => {


    const [counter, setCounter] = useState(10)

    const increment = useCallback((num=1) => {
            setCounter(c => c+num);
        }, [setCounter]
    );




    return (
        <div>
            <h1>CallbackHook</h1>
            <p>{counter}</p>
            <hr/>
            <ShowIncrement increment={increment} />
        </div>
    )
}
