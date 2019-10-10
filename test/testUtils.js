import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/reducers';
import { createStore, applyMiddleware } from 'redux';

import {middlewares} from '../src/configureStore';

/**
 * 
 * @param {object} initialState 
 */
export const storeFactory = (initialState) => {
    const store = applyMiddleware(...middlewares)(createStore);
    return store(rootReducer, initialState); 
} 

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}