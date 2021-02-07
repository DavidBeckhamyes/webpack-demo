<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <router-view></router-view>

    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi",
    };
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // push => pushState
      // $router.push('/home')
      console.log("homeClick");
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.push("/about");
      console.log("aboutClick");
    },
  },
};
</script>

<style>
.active {
  color: blue;
}
</style>
