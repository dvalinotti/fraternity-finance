export function authHeader() {
  let user = localStorage.getItem('session')

  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token }
  } else {
    return {}
  }
}