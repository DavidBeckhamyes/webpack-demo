import { INCREMENT } from './mutation-type'
import Vue from 'vue'

export default {
    // 方法 参数:payLoad负载
    [INCREMENT](state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    incrementCount(state, count) {
        state.counter += count
    },
    incrementStu(state, stu) {
        state.students.push(stu)
    },
    updateInfo(state) {
        // 响应式
        // state.info.name = 'coderwhy'
        // 非响应式
        // state.info['address'] = 'Los Angles'
        // 响应式
        // Vue.set(state.info, 'address', 'Los Angles')
        // 非响应式
        // delete state.info.age
        Vue.delete(state.info, 'age')
    }
}