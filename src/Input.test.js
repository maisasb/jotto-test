import React from 'react';
import { shallow}  from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper
 * @function setup
 * @param {object} initialState 
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
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
        test('renders component without error', () =>{

        });
        test('NOT renders input box', () =>{

        });
        test('NOT renders submit button', () =>{

        });
    });
});
describe('update state', () => {
    test('', () =>{

    });
});
