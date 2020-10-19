import React, {useEffect, memo} from 'react'

//el memo "memoriza" la pantalla y asi evita que se vuelva a renderizar el componente
//En el caso de que cambie un valor externo de nuestro componente
export const Small = memo(({value}) => {
    useEffect(() => {
        console.log('effet')
        
    }, [value])
    console.log('llamada')
    return (
        <>             
            <small>{value}</small>
        </>
    )
});