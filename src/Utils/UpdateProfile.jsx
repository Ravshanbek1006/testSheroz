import {BaseUrl} from './FetchData';

class update {
  async updateProfile(data) {
    let endPoint = `profile/${data.oldNumber}`;
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

export default new update();
