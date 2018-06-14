import {combineReducers} from 'redux';
import repositories from './repository';


const allReducers = combineReducers({
    repositories: repositories
});

export default allReducers;