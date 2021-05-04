import { createApp } from 'vue'
import App from './App.vue'
import router from 'router'
import 'normalize.css/normalize.css'
import mitt from 'mitt';  // 引入mitt

let app = createApp(App);

//挂载事务总线
app.config.globalProperties.$bus = new mitt()

app.use(router).mount('#app')
