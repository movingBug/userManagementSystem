/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-09 15:38:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-10 11:51:48
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
