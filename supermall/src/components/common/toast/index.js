import Toast from './Toast';
import { createApp } from 'vue'

const obj = {};

// 当main.js执行到.use(toast)代码(安装插件)时，会执行obj的install函数
obj.install = function (app) {
    // Vue2写法
    // 1.创建组件构造器
    // const toastContrustor = Vue.extend(Toast);
    // 2.new的方式，根据组件构造器，可以创建出来一个组件对象
    // const toast = new toastContrustor();
    // 3.将组件对象，手动挂载到某一个元素上
    // toast.$mount(document.createElement('div'));
    // 4.toast.$el对应的就是div
    // document.body.appendChild(toast.$el);
    // Vue3写法
    /* Vue3的自定义插件 */
    // 1.实例化并绑定组件
    const toastConstructor = createApp(Toast);
    const instance = toastConstructor.mount(document.createElement('div'));

    // 2.将挂载的Node添加到body中
    document.body.appendChild(instance.$el);

    // 3.定义全局($toast即是此插件的名称)
    app.config.globalProperties.$toast = instance;
}

export default obj;