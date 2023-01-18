import {BaseUrl} from './FetchData';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

class changePess {
  async PasswordChange(data) {
    let endPoint = `change-password/${data.phone}/`;
    let response = await fetch(`${BaseUrl}/${endPoint}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + data.token,
      },
      body: JSON.stringify({
        old_password: data.old_pass,
        password: data.new_pass,
        password2: data.new_pass1,
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

export default new changePess();
