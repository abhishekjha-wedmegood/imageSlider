import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
 reducer,
 applyMiddleware(sagaMiddleware, thunk)
)
export default store;
