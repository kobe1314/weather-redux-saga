import {LOADING,SUCCESS,FAIL} from './status';
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAIL} from './actiontype';
export const weatherReducer = (state = {state : LOADING}, action) => {
    switch(action.type) {
        case FETCH_STARTED : {
            return {state: FETCH_STARTED};
        }

        case FETCH_SUCCESS : {
            return {...state, state: SUCCESS, ...action.result};
        }

        case FETCH_FAIL : {
            return {...state, state: FAIL, ...action.error}
        }
        default: 
         { return state }
    }
}