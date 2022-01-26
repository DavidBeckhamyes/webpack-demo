import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'ant-design-vue'// 引入Ant Design Vue组件
// import 'ant-design-vue/dist/antd.css' // 引入Ant Design Vue样式
createApp(App).use(Button).mount('#app')
