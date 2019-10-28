export function authHeader() {
  let user = JSON.parse(localStorage.getItem('session'));

  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token }
  } else {
    return {}
  }
}