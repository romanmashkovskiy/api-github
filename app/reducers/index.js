import {combineReducers} from 'redux';
import listReducer from './list-reducer';


const rootReducer = combineReducers({
    listReducer: listReducer
});

export default rootReducer;