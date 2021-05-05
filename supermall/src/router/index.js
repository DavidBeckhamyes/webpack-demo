import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("views/home")
const Category = () => import("views/category")
const Cart = () => import("views/cart")
const Profile = () => import("views/profile")
const Detail = () => import("views/detail")

const routes = [
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
  },
  {
    // 动态路由传参写法
    path: "/detail",
    component: Detail
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router
