import { actionTypes} from '../actions';
/**
 * @function successReducer
 * @param {boolean} state - Current success state
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state.
 */
export default (state=false, action) => {
    switch (action.type){
        case actionTypes.CORRECT_GUESS:
            return true;
        default: 
            return state;
    }
}