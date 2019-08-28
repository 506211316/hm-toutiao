// 负责 配置axios  提供一个配置好的AXIOS即可。
import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 设置公用根地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 设置请求拦截器
axios.interceptors.request.use(config => {
  // 获取到token，并且在每回发送请求的时候，都会在头部携带token
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, err => {
  return Promise.reject(err)
})
// 设置响应拦截器
// 只有在发送请求之后，服务器接收到请求，才可以做出响应，才能执行响应拦截器的代码
axios.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.status === 401) {
    store.removeUser()
    router.push('/login')
  }
  return Promise.reject(err)
})
export default axios
