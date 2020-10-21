import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en LoginScreen.js', ()=>{
    
    const setUser = jest.fn();
    
    const wrapper = mount(    
        <UserContext.Provider value={{
            setUser: setUser,
        }}>
            <LoginScreen/>
        </UserContext.Provider>
    )

    test('Snapshot', ()=>{

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de ejcutar el setUser con el argumento esperado', ()=>{

        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith(expect.any(Object));

    });


})