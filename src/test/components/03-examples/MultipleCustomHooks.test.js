import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', ()=>{

    useFetch.mockReturnValue({
        data: null,
        loading: true, 
        error: null
    });
    useCounter.mockReturnValue({
        state: 10,
        increment: ()=>{}
    });

    const wrapper = shallow(<MultipleCustomHooks/>)

    test('Debe de mostrarse correctamente', ()=>{

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar la info', ()=>{

        useFetch.mockReturnValue({
            data: [{
                author: 'Jesus',
                quote: 'Hola Mundo'
            }],
            loading: false, 
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Jesus');   

    });

});