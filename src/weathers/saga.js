import { put, takeEvery, all,call,delay,takeLatest,takeLeading, select } from 'redux-saga/effects';
import { FETCH_STARTED,FETCH_WEATHER_API,FETCH_SUCCESS,FETCH_FAIL } from './actiontype';
import {fetchAPI} from './servers';

function* fetchWeather(action) {
    yield put({type:FETCH_STARTED});
    const apiUrl = `/data/cityinfo/${action.cityCode}.html`;
    try{
        //Can get state value
        const weather = yield select(state => state.weather);
        console.log('state value:'+weather.status);

        // call one api
        const response = yield call(fetchAPI,apiUrl);
        yield delay(3000);//To test takeEvery and takeLatest different
        console.log(response);

        // call multiple api
        // const [ wealther1, wealther2] = yield [
        //     call(fetchAPI, apiUrl),
        //     call(fetchAPI, apiUrl)
        //   ]
        yield put({type: FETCH_SUCCESS, result : response})
    } catch (error) {
        console.log(error);
        yield put({type: FETCH_FAIL, error})
    }    
    
}
function* weatherSaga() {
    yield takeLeading(FETCH_WEATHER_API, fetchWeather);
    //yield takeEvery(FETCH_WEATHER_API, fetchWeather);
    // // yield takeLatest(FETCH_WEATHER_API,fetchWeather);
}


export default function* rootSaga() {
    yield all([
      weatherSaga()
    ])
  }
