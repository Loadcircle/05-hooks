const { renderHook, act } = require("@testing-library/react-hooks");
const { useCounter } = require("../../hooks/useCounter");

describe('Pruebas en el useCounter', ()=>{


    test('debe retornar state, increment, decrement, reset', ()=>{

        const {result} = renderHook(() => useCounter());

        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('debe retornar el valor del state enviado', ()=>{

        const {result} = renderHook(() => useCounter(100));

        expect(result.current.state).toBe(100);
    });


    test('Incrementar debe incrementar el valord el state', ()=>{

        const {result} = renderHook(() => useCounter(10));
        const {increment} = result.current;

        //no puedo ejectuar el metodo del hook directamente, se importa act de testing library
        act(()=>{
            increment();
        });

        expect(result.current.state).toBe(11);

    });

    test('Decrement debe reducir el valor del state', ()=>{

        const {result} = renderHook(() => useCounter(10));
        const {decrement} = result.current;

        
        act(()=>{
            decrement();
        });

        expect(result.current.state).toBe(9);

    });
    
    test('Reset debe reiniciar el valor del state', ()=>{

        const {result} = renderHook(() => useCounter(10));
        const {reset, decrement} = result.current;

        //Cada act solo puede ejcutar la misma función una vez
        act(()=>{
            decrement();
            reset();
        });
        
        expect(result.current.state).toBe(10);

    });

});