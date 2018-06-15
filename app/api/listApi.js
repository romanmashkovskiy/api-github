export default class ListApi {
    static getList() {
        return fetch('https://api.github.com/repositories')
        // return fetch(process.env.API_ROOT)
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }
}