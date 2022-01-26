import { createApp } from 'vue'
import App from './App.vue'
import { Button, Layout, Menu, Breadcrumb } from 'ant-design-vue'// 引入Ant Design Vue组件
import router from 'router';

// import 'ant-design-vue/dist/antd.css' // 引入Ant Design Vue样式
import 'ant-design-vue/dist/antd.less'; // 引入官方提供的 less 样式入口文件
createApp(App).use(Button).use(Layout).use(Menu).use(Breadcrumb).use(router).mount('#app')
