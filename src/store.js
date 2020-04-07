import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import uiReducer from './reducers/uiReducer';

const reducers = combineReducers({  uiReducer });

const middlewares = [thunk, promise, createLogger()];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;