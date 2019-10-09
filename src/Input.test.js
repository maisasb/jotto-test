import React from 'react';
import { shallow}  from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper in this connected component
 * @function setup
 * @param {object} initialState 
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    //dive() recupera o componente da hoc
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    //console.log(wrapper.debug());
    return wrapper;
}

//setup();

describe('render', () => {
    describe('word has NOT been guessed', () =>{
        test('renders component without error', () =>{
            
        });
        test('renders input box', () =>{

        });
        test('renders submit button', () =>{

        });
    });
    describe('word has been guessed', () =>{
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('renders component without error', () =>{
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test('NOT renders input box', () =>{
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });
        test('NOT renders submit button', () =>{
            const submit = findByTestAttr(wrapper, "submit-button");
            expect(submit.length).toBe(1);
        });
    });
});
describe('update state', () => {
    test('', () =>{

    });
});
