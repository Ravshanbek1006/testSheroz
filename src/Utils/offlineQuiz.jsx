import {BaseUrl4} from './FetchData';
import {BaseUrl3} from './FetchData';

class OffTest {
  async Savollar(ID) {
    console.log(ID);
    // console.log("ID" , ID);
    let endPoint = 'category';
    let response = await fetch(`${BaseUrl4}/${endPoint}/${ID}/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
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

  async Category() {
    let endPoint = 'category';
    let response = await fetch(`${BaseUrl3}/${endPoint}/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
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

export default new OffTest();
