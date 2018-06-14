class ListApi {
    static getList() {
        return fetch('https://api.github.com/repositories')
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }
}

export default ListApi;