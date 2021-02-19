<template>
  <div id="app">
    <h2>---APP内容 modules中的内容---</h2>
    <h2>{{ $store.state.moduleA.name }}</h2>
    <h2 @click="updateName">修改名字</h2>
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <h2>{{ $store.getters.fullName3 }}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>----App内容:info对象的内容是否是响应式----</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>-----APP内容-----</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">添加学生</button>

    <h2>-----APP内容:getters相关信息-----</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(8) }}</h2>

    <h2>----Hello Vuex内容----</h2>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutation-type";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "我是App组件",
    };
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      this.$store.commit("incrementCount", count);
    },
    addStu() {
      const stu = { id: 114, name: "alan", age: 35 };
      this.$store.commit("incrementStu", stu);
    },
    updateInfo() {
      // this.$store.commit("updateInfo")
      // this.$store.dispatch("aUpdateInfo", "我是payLoad")
      // this.$store.dispatch("aUpdateInfo", {
      //   message: "我已经完成了内部的调用",
      //   success: function() {
      //     console.log("任务完成")
      //   }
      // })
      this.$store.dispatch("aUpdateInfo").then((res) => console.log(res));
    },
    updateName() {
      this.$store.commit("updateName", "lisi");
    },
    asyncUpdateName() {
      this.$store.dispatch("aUpdateName");
    }
  },
};
</script>

<style>
</style>
