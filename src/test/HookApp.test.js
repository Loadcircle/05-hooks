import React from 'react';
const { shallow } = require("enzyme");
const { default: HookApp } = require("../HookApp");

describe('Pruebas en el hook app', ()=>{

    const wrapper = shallow(<HookApp />);

    test('Match component', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Componen content', ()=>{
        expect(wrapper.find('div').props().children).toBe('sopa de makako')
    });

});