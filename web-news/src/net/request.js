import axios from 'axios';
import { TIMEOUT, SUCCESS_CODE } from './config';
import { MENU_API, LIST_API, DETAILS_API, IS_LOGIN_API, LOGIN_API } from './api';


/**
 * 获取菜单数据
 */
export const getMenuData = () => {
  return requestApi(MENU_API);
}

/**
 * 获取列表数据
 * @param id 数据列表id
 */
export const getListData = (id) => {
  return requestApi(LIST_API + id);
}


/**
 * 获取详情数据
 */
export const getDetailsById = (id) => {
  return requestApi(DETAILS_API + id);
}

/**
 * 获取登陆状态
 */
export const isLoginStatus = () => {
  return requestApi(IS_LOGIN_API);
}

/**
 * 用户登陆
 * @param {用户名} username 
 * @param {密码} password 
 */
export const login = (username, password) => {
  return requestApi(LOGIN_API(username, password));
}

const requestApi = (url) => {
  return axios.get(url, { timeout: TIMEOUT })
    .then(res => {
      if (res.status === SUCCESS_CODE) {
        return res.data.data;
      }
      throw Error('无落数据获取错误');
    }).catch(e => {
      if (e) {
        console.log(e);
      }
      //返回错误数据
    }).then(data => {
      return new Promise(resolve => {
        resolve(data);
      });
    });
}