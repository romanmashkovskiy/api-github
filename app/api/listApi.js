
class ListApi {
    static getList() {
        return fetch('https://api.github.com/repositories')
        // return fetch(process.env.REACT_APP_API_ROOT)
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }
}

export default ListApi;