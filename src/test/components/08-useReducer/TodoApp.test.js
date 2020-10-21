import { act } from '@testing-library/react';
import React from 'react';
import { demoTodos } from '../../fixtures/demoTodos';
const { shallow, mount } = require("enzyme")
const { TodoApp } = require("../../../components/08-useReducer/TodoApp")

describe('Pruebas en TodoApp', ()=>{

    const wrapper = shallow(<TodoApp/>);

    Storage.prototype.setItem = jest.fn()

    test('Snapshot', ()=>{

        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de agregar un todo', ()=>{

        //el mount se puede utilizar para probar toda la app
        const wrapper = mount(<TodoApp/>);

        //este act si viene del testin library deReact, no de react hooks
        act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );  
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );              
        });

        expect( wrapper.find('h1').text().trim() ).toBe(`Todo app (${2})`);
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });

    test('Debe de eliminar un todo', ()=>{

        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );  
        expect( wrapper.find('h1').text().trim() ).toBe(`Todo app (${1})`);

        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );  
        expect( wrapper.find('h1').text().trim() ).toBe(`Todo app (${0})`);


    });

})