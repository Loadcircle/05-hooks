import React from 'react' 
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './../components.css';


export const MultipleCustomHooks = () => {
    const url = 'https://www.breakingbadapi.com/api/quotes/';

    const {state:page, increment:nextPage} = useCounter(1);

    const {loading, data} = useFetch(url+page);

    const {author:autor, quote:cita} = !!data && data[0];
      
    return (
        <div>
            <h1>Custom Hooks!!!</h1>
            
            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                : 
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">
                            {cita}
                        </p>
                        <footer className="blockquote-footer">{autor}</footer>
                    </blockquote>    
                )
            }

            <button className="btn btn-primary" onClick={()=>{nextPage(1)}}>Siguiente cita</button>

        </div>
    )
}
