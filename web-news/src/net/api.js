const BASE_URL = "http://www.dell-lee.com/react/api/"
export const MENU_API = BASE_URL + "header.json";
export const LIST_API = BASE_URL + "list.json?id=";
export const DETAILS_API = BASE_URL + "detail.json?id=";
export const IS_LOGIN_API = BASE_URL + "isLogin.json";
export const LOGIN_API = (username, password) => {
  return `${BASE_URL}login.json?user=${username}&password${password}`;
}