import React, { useLayoutEffect, useRef, useEffect, useState } from 'react' 
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './../components.css';


export const LayoutEffect = () => {
    const url = 'https://www.breakingbadapi.com/api/quotes/';

    const {state:page, increment:nextPage} = useCounter(1);

    const { data} = useFetch(url+page);

    const {quote:cita} = !!data && data[0];

    const pTag = useRef()

    const [bounding, setBounding] = useState({})

    // useEffect(() => {
    //     console.log(pTag.current)
        
    // }, [cita])

    useLayoutEffect(() => {
        setBounding(pTag.current.getBoundingClientRect())
        return () => {
            // cleanup
        };
    }, [cita])
      
    return (
        <div>
            <h1>Layout effect</h1>
            

            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-0">
                    {cita}
                </p>
            </blockquote>    


            <button className="btn btn-primary" onClick={()=>{nextPage(1)}}>Siguiente cita</button>

            <pre>
                {JSON.stringify(bounding, null, 3)}
            </pre>
        </div>
    )
}
