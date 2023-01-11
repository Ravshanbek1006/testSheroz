import {BaseUrl} from './FetchData';

class update {
  async updateProfile(data) {
    console.log(data, 'res');
    let endPoint = `profile/${data.oldNumber}`;
    console.log(`${BaseUrl}/${endPoint}/`, 'ssss');
    let response = await fetch(`${BaseUrl}/${endPoint}/`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + data.token,
      },
      body: JSON.stringify({
        phone: data.u_phone,
        full_name: data.name,
        gender: 'male',
      }),
    })
      .then(ress => {
        console.log(ress);
        return ress.json();
      })
      .then(json => {
        console.log(json, 'json');
        return json;
      })
      .catch(err => {
        console.log(err, 'ishladi1111112');
        return err;
      });

    return response;
  }
}

export default new update();
