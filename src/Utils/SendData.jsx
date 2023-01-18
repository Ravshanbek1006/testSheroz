import { BaseUrl4 } from './FetchData';

class SendData {
    async UserData(data, token) {

        let endPoint = 'get_answer';
        let response = await fetch(`${BaseUrl4}/${endPoint}/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(data),
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

export default new SendData();
