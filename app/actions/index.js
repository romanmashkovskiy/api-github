import listApi from '../api/listApi';
import * as types from './action-types';

export function loadList() {
    return function(dispatch) {
        return listApi.getList()
            .then(response => {
                dispatch(loadListSuccess(response));
            }).catch(error => {
                throw(error);
            });
    };
}

export function loadListSuccess(response) {
    return {type: types.LOAD_DATA_SUCCESS, payload: response};
}

export const select = (repository) => {
    return {
        type: types.REPOSITORY_SELECTED,
        payload: repository
    }
};