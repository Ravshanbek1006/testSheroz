import { BaseUrl4 } from './FetchData';

class GetUserData {
    async UserData(id, token) {
        let endPoint = 'filter-user/?user_id=';
        let response = await fetch(`${BaseUrl4}/${endPoint}${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                 Authorization: 'Bearer ' + token,
            },
        })
            .then(ress => {
                return ress.json();
            })
            .then(json => {
                return json;
            })
            .catch(err => {
                return err;
            });

        return response;
    }
}

export default new GetUserData();
