import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/index';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}