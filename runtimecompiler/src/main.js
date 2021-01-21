// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

const cpn = {
  template: `<div>
  <h2>{{message}}</h2>
  </div>
  `,
  data() {
    return {
      message: '我是组件'
    }
  }
}

new Vue({
  el: '#app',
  render: function (createElement) {
    // 1.createElement('标签', {标签的属性}, [''])
    // return createElement('h2', { class: 'box' }, ['Hello World', createElement('button', ['按钮'])])
    // 2.传入组件对象
    return createElement(App)
  }
})

function sum(num1, num2) {
  return num1 + num2
}

console.log(sum(20, 30))

// template ==> ast ==> render ==> vdom ==> UI