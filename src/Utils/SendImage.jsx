import { BaseUrl } from './FetchData';

class SendRasm {
    async SendImage(data, token, nomer) {
        console.log('====================================');
        console.log(token);
        console.log('====================================');
       console.log("nomer", nomer);
       console.log(data);
        let endPoint = 'profile';
        let response = await fetch(`${BaseUrl}/${endPoint}/${nomer}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'mulitpart/form-data',
                Authorization: 'Bearer ' + token,
            },
            body: data,
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

export default new SendRasm();
