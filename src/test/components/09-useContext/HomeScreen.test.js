import React from 'react';
import { UserContext } from '../../../components/09-useContext/UserContext';
const { shallow, mount } = require("enzyme");
const { HomeScreen } = require("../../../components/09-useContext/HomeScreen");

describe('Pruebas en HomeScreen', ()=>{
    
    const user = {
        name: 'Jesus',
        email: 'Jesusmilano96@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('Snapshot', ()=>{

        expect(wrapper).toMatchSnapshot();

    });
    

})