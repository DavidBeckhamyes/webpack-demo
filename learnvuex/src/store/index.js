import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
    state: {
        name: "zhangsan"
    },
    mutations: {
        updateName(state, payLoad) {
            state.name = payLoad
        }
    },
    actions: {
        // context是本模块的mutations
        aUpdateName(context) {
            setTimeout(() => {
                context.commit("updateName", "wangwu")
            }, 1000);
        }
    },
    getters: {
        fullName(state) {
            return state.name + "1111"
        },
        fullName2(state, getters) {
            return getters.fullName + "2222"
        },
        fullName3(state, getters, rootState) {
            return getters.fullName2 + rootState.counter
        }
    }
}

const state = {
    counter: 1000,
    students: [
        { id: 110, name: 'why', age: 18 },
        { id: 111, name: 'kobe', age: 24 },
        { id: 112, name: 'james', age: 30 },
        { id: 113, name: 'curry', age: 12 },
    ],
    info: { id: 115, name: 'kobe', age: 40 }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        moduleA
    }
})

// 3.导出store独享

export default store