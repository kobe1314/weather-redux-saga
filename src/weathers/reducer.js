import {LOADING,SUCCESS,FAIL} from './status';
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAIL} from './actiontype';

const initalState = {
    status : LOADING, 
    weatherinfo: {
        city: '',
        weather:'',
        temp1: '',
        temp2: ''

    }
}
export const weatherReducer = (state = initalState, action) => {
    switch(action.type) {
        case FETCH_STARTED : {
            return {...state,status: LOADING};
        }

        case FETCH_SUCCESS : {
            return {...state, status: SUCCESS, ...action.result};
        }

        case FETCH_FAIL : {
            return {...state, status: FAIL, ...action.error}
        }
        default: 
         { return state }
    }
}