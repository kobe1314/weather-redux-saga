import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAIL} from './actiontype';

const fetchWeatherStarted = (action) => ({
    type : FETCH_STARTED,
    cityCode: action.cityCode
})

const fetchWeatherSuccess = (result) => ({
    type : FETCH_SUCCESS,
    result
})

const fetchWeatherFail = (error) => ({
    type : FETCH_FAIL,
    error
})

export {
    fetchWeatherFail,
    fetchWeatherStarted,
    fetchWeatherSuccess
}