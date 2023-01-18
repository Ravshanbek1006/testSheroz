import { BaseUrl5 } from './FetchData';

class GetBooks {
    async GetBook() {
        let endPoint = 'category';
        let response = await fetch(`${BaseUrl5}/${endPoint}/`, {
            method: 'GET',
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

export default new GetBooks();
