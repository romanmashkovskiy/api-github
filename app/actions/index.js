import axios from 'axios';

export const getList = () => {
    axios.get('https://api.github.com/users/romanmashkovskiy')
        .then(response => {
            return {
                type: "DATA_REQUESTED",
                payload: response
            }
        });
};

// function fetchData(){
//     return(dispatch,getState) =>{ //using redux-thunk here... do check it out
//         const url = '//you url'
//         fetch(url)
//             .then (response ) => {dispatch(receiveData(response.data)} //data being your api response object/array
//     .catch( error) => {//throw error}
//         }
//     }

// export const getList = () => {
//     axios.get('https://api.github.com/users/romanmashkovskiy')
//         .then(response => console.log(response));
//     return {
//         type: "DATA_REQUESTED",
//         payload: '111'
//     }
// };