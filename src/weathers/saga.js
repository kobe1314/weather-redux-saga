import { put, takeEvery, all,call } from 'redux-saga/effects';
import { FETCH_STARTED,FETCH_WEATHER_API,FETCH_SUCCESS,FETCH_FAIL } from './actiontype';
import {fetchAPI} from './servers';

function* fetchWeather(action) {
    yield put({type:FETCH_STARTED});
    const apiUrl = `/data/cityinfo/${action.cityCode}.html`;
    try{
        const response = yield call(fetchAPI,apiUrl);
        console.log(response);
        debugger;
        yield put({type: FETCH_SUCCESS, result : response})
    } catch (e) {
        console.log(e);
    }    
    
}
function* weatherSaga() {
    debugger;
    yield takeEvery(FETCH_WEATHER_API, fetchWeather)
}


export {
    weatherSaga
}