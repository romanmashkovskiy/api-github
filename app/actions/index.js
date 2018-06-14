import listApi from '../api/listApi';

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
    return {type: 'LOAD_DATA_SUCCESS', payload: response};
}

export const select = (repository) => {
    return {
        type: "REPOSITORY_SELECTED",
        payload: repository
    }
};