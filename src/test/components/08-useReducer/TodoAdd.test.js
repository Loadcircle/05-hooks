import React from 'react';
import { useForm } from '../../../hooks/useForm';
const { shallow } = require("enzyme");
const { TodoAdd } = require("../../../components/08-useReducer/TodoAdd");

const handleAddTodo = jest.fn();
// const handleInputChange = jest.fn();
// const reset = jest.fn();
// jest.mock('../../../hooks/useForm');

// useForm.mockReturnValue({
//     description: '',
//     handleInputChange: handleInputChange,
//     reset: reset,
// });

describe('Pruebas en el todoadd', ()=>{

    const wrapper = shallow(<TodoAdd
        handleAddTodo={handleAddTodo}
    />);

    test('Debe hacer match el snapshot', ()=>{

        expect(wrapper).toMatchSnapshot();

    });

    test('No debe de llamar handleAddTodo', ()=>{

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault: ()=>{}});

        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });
    
    test('Debe de llamar la funcion handleAddTodo y el reset', ()=>{
        
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value: value,
                name: 'description',
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault: ()=>{}});
        
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));

        //le decimos que sea llamado con un objeto con estos valores y cualquier id siempre y cuando sea un numero
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number), 
            desc: value,
            done: false,            
        });        

        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
    
    
});