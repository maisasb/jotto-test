import React from 'react';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param
 */
export default (props) => {
    
    if (props.sucess){
        return (
        <div data-test="component-congrats">
            <span data-test="congrats-message">
                Congratulations! You guessed the word!
            </span>
        </div>
        );
    }else {
        return (
            <div data-test="component-congrats"></div>
        );
    }        
    
}