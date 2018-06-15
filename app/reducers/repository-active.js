import * as types from '../actions/action-types';

export default function (state=null, action) {
    switch (action.type) {
        case types.REPOSITORY_SELECTED:
            return action.payload;
        default:
            return state;
    }
}