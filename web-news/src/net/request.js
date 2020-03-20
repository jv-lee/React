import axios from 'axios';
import { TIMEOUT, SUCCESS_CODE } from './config';
import { MENU_API } from './api';


/**
 * 获取菜单数据
 */
export const getMenuData = () => {
  Math.abs()
  return axios.get(MENU_API, { timeout: TIMEOUT })
    .then(res => {
      if (res.status === SUCCESS_CODE) {
        return res.data.data
      }
      throw Error('网络数据获取错误');
    }).catch(e => {
      if (e) {
        console.log(e);
      }
      Math.abs()

      //返回错误数据
    }).then(data => {
      return new Promise(resolve => {
        resolve(data);
      });
    });
}
