const { shallow } = require("enzyme");
import React from 'react';
const { TodoListItem } = require("../../../components/08-useReducer/TodoListItem");
const { demoTodos } = require("../../fixtures/demoTodos");


describe('Pruebas en TodoListItem', ()=>{
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem
        todo={demoTodos[0]} 
        index={0} 
        handleDelete={handleDelete} 
        handleToggle={handleToggle} 
    />);

    test('Debe de mostrarse correctamente', ()=>{

        expect(wrapper).toMatchSnapshot();
        expect(handleDelete).not.toHaveBeenCalled();
        expect(handleToggle).not.toHaveBeenCalled();

    });

    test('Debe de llamar a la función handleDelete', ()=>{

        wrapper.find('button').simulate('click');
        
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);


    });
    
    test('Debe de llamar a la función handleToggle', ()=>{

        wrapper.find('p').simulate('click');
        
        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);                

    });

    test('Debe de retornar la tarea con el todo completado', ()=>{

        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow(<TodoListItem
            todo={todo} 
        />);

        expect(wrapper.find('p').hasClass('completed')).toBe(true);

    });
    
    test('Debe Mostrar el texto correctamente', ()=>{

        expect(wrapper.find('p').text().trim()).toBe(`${1} ${demoTodos[0].desc}`);

    });

})