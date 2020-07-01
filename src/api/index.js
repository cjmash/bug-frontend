import axios from 'axios';
const url = 'http://localhost:8080';

export const passportLogin = async ({email, password}) => {
  try {
    return await axios.post(`${url}/register`, {
      email: email,
      password: password
    })
  } catch (err) {
    console.log(err)

  }
}


