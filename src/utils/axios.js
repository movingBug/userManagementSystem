/*
 * @Author: zhanglifan
 * @Date: 2019-09-17 07:56:47
 * @Last Modified by: zhanglifan
 * @Last Modified time: 2019-09-23 17:06:54
 */

import axios from 'axios'
import { getToken } from './auth'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 3000,
  headers: {
    'token': getToken('token')
  }
})
// 请求拦截器
instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use((Response) => {
  return Response.data
}, (error) => {
  return Promise.reject(error)
})

export default instance
