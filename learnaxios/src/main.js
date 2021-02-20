import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'
axios.defaults.timeout = 5000

// 基本使用方式
// axios({
//   url: '/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 3
//   }
// }).then(res => {
//   console.log(res)
// })

// axios发送并发请求
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 3
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// 创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://localhost:18192',
//   timeout: 5000
// })

// instance1({
//   url: '/wx/test'
// }).then(res => {
//   console.log(res)
// })

// 封装request模块
import { request } from "./network/request"

// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function (res) {
//     console.log(res)
//   },
//   failure: function (err) {
//     console.log(err)
//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log('获取res=>', res)
}).catch(err => {
  console.log('获取err=>', err)
})