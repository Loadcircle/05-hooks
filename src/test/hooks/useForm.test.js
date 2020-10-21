import { renderHook, act } from '@testing-library/react-hooks';
import React from 'react';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en el use Form', ()=>{

    const initialStateForm = {
        name: 'Jesus',
        email: 'jesusmilano96@gmail.com'
    };

    test('debe retornar values, handleInputChange, reset', ()=>{
        
        const {result} = renderHook(() => useForm(initialStateForm));

        const [values, handleInputChange, reset] = result.current;
        
        expect(values).toEqual(initialStateForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });
    
    
    test('debe cambiar 1 valor del form', ()=>{

        const {result} = renderHook(() => useForm(initialStateForm));

        const [, handleInputChange] = result.current;

        const newName = 'Jesus Milano';

        act(()=>{
            handleInputChange({
                target: {
                    name: 'name', 
                    value: newName
                }
            });
        });

        const [values] = result.current;
        expect(values.name).toBe(newName);

    });
    
    test('debe reiniciar el valor del form con Reset', ()=>{

        const {result} = renderHook(() => useForm(initialStateForm));

        const [, handleInputChange, reset] = result.current;

        act(()=>{
            handleInputChange({
                target: {
                    name: 'name', 
                    value: 'JesusMilano'
                }
            });
            reset();
        });

        const [values] = result.current;
        expect(values.name).toBe(initialStateForm.name);

    });


});