import { createStore, applyMiddleware,compose,combineReducers } from 'redux';
import {weatherReducer} from './weathers/reducer';
import createSagaMiddleware from 'redux-saga';
import {weatherSaga} from './weathers/saga';
// import Perf from 'react-addons-perf';

const sagaMiddleware=createSagaMiddleware();
const win = window;
// win.Perf = Perf;

const rootReducer = combineReducers({
    weather : weatherReducer
});

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
    // middlewares.push(require('redux-immutable-state-invariant')());
    // middlewares.push(require('redux-immutable-state-invariant').default())
}
middlewares.push(sagaMiddleware);

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension(): (f) => f )
const store = createStore(rootReducer,{},storeEnhancers);

sagaMiddleware.run(weatherSaga);

export { store };