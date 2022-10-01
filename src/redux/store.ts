import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
// reducers
import eventReducer from 'redux/reducers/eventReducer';
// sagas
import eventSaga from 'redux/sagas/eventSaga';
// reducers
const reducers = combineReducers({
    event: eventReducer,
});

//Add Sagas
function* rootSaga() {
    yield all([
        ...eventSaga
    ]);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;