export function getFormBody(params) {
  let formBody = []; // 'username-utkarsh', 'password=123'

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // utkarsh 123 => utkarsh%20123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); // 'username-utkarsh&password=123'
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('token');
}
