import React, {useMemo, useState}  from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import './../components.css';

export const MemoHook = () => {
    const {state, increment} = useCounter(150);

    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(()=>{procesoPesado(state)}, [state]);


    return (
        <div>            
            <h1>Memo HOOK</h1>
            <p>Counter:  <small>{state}</small> </p>
            <hr/>
            <p>{memoProcesoPesado}</p>

            <button className="btn btn-primary" onClick={()=>{increment(1)}}>Incrementar</button>
           
            <button className="btn btn-primary ml-3" onClick={()=>{setShow(!show)}}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
