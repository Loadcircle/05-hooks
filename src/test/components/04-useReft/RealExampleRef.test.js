import React from 'react';
const { shallow } = require("enzyme");
const { RealExampleRef } = require("../../../components/04-useReft/RealExampleRef");

describe('Puebas en RealExampleRef', ()=>{

    const wrapper = shallow(<RealExampleRef />);
    
    test('Debe mostrarse correctamente', ()=>{

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('Debe de mostrar el componente MultipleCustomHooks', ()=>{

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });

})