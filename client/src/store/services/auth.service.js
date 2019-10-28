import axios from 'axios';

function login(username, password) {
  const options = {
    method: 'post',
    mode: 'cors',
    headers: {
      "Content-Type" : "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  
  return axios.post('http://localhost:3000/users/auth', { username: username, password: password }, options)
    .then((response) => {
      // console.log(response);
      if (response.data.success && response.data.token) {
        localStorage.setItem('session', response.data.token);
      } return response.data;
    });
}

function logout(token) {
  const options = {
    method: 'post',
    mode: 'cors',
    headers: {
      "Content-Type" : "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

  return axios.post('http://localhost:3000/users/logout', { token: token }, options)
    .then((response) => {
      // console.log(response);
      if (response.data.success) {
        localStorage.removeItem('session');
      } return response.data;
    })
}

// EXPORTS
export const authService = {
  login,
  logout
}