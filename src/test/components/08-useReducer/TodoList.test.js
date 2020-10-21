import React from 'react';
const { shallow } = require("enzyme");
const { TodoList } = require("../../../components/08-useReducer/TodoList");
const { demoTodos } = require("../../fixtures/demoTodos");

describe('Pruebas en el TodoList', ()=>{

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoList
        todos = {demoTodos} 
        handleDelete = {handleDelete} 
        handleToggle = {handleToggle}    
    />);

    test('Debe hacer match el snapshot', ()=>{

        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe tene 2 todolistitem', ()=>{

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));

    });    

});