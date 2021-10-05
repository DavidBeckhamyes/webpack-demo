import { createApp } from 'vue'
import App from './App.vue'
import router from 'router'
import 'normalize.css/normalize.css'
import mitt from 'mitt';  // 引入mitt
import FastClick from 'fastclick';

// 解决移动端300ms延迟
FastClick.attach(document.body);

// 引入弹框插件
import toast from 'components/common/toast';

let app = createApp(App);

//挂载事务总线
app.config.globalProperties.$bus = new mitt()

// 安装弹框插件
app.use(toast).use(router).mount('#app');

