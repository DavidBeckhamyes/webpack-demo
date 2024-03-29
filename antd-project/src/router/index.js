import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("@/views/home")

const routes = [
    {
        path: '',
        redirect: '/home',
    },
    {
        path: "/home",
        component: Home
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router
