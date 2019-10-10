/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-09 15:38:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-09 15:38:56
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken(token = TokenKey) {
  return Cookies.get(token)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
