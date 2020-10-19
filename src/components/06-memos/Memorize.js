import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import './../components.css';

export const Memorize = () => {

    const {state, increment} = useCounter(10);

    const [show, setShow] = useState(true)

    return (
        <div>            
            <h1>Memorize</h1>
            <p>Counter:  <Small value={state} /> </p>
            <hr/>

            <button className="btn btn-primary" onClick={()=>{increment(1)}}>Incrementar</button>
           
            <button className="btn btn-primary ml-3" onClick={()=>{setShow(!show)}}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
