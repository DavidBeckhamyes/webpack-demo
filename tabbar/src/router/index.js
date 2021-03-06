import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("../views/home")
const Category = () => import("../views/category")
const Cart = () => import("../views/cart")
const Profile = () => import("../views/profile")

Vue.use(Router)

const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/category",
      component: Category
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/profile",
      component: Profile
    }
  ]
})
