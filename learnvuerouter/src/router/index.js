// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  { 
    // 协议头：//host/query
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: "history",
  linkActiveClass: "active"
})

// 3.将router对象传入到Vue实例中
export default router