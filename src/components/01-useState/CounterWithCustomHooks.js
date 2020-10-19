import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './../components.css'

export const CounterWithCustomHooks = () => {
    const {state:counter, increment, decrement, reset} = useCounter(1);

    return (
        <div>
            <h1>Counter with hook: {counter}</h1>
            <hr/>

            <button 
                className="btn btn-primary mr-1"
                onClick={()=>decrement()}>-1</button>
            <button 
                className="btn btn-primary mr-1"
                onClick={reset}>Reset</button>
            <button 
                className="btn btn-primary mr-1"
                onClick={()=>increment()}>+1</button>
        </div>
    )
}
