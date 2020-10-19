export const procesoPesado = (iteraciones = 200)=>{
    
    for(let i = 0; i<iteraciones; i++){
        console.log(`Going... ${i}`)
    }

    return `${iteraciones} iteraciones realizadas`
}
