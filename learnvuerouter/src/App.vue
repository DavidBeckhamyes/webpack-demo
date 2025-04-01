<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <keep-alive> <router-view></router-view></keep-alive>
    <!-- tag可以指定<router-link>之后渲染成什么组件，比如下面的代码会被渲染成一个<button>元素，而不是<a> -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    replace不会留下history记录，所以指定replace的情况下，后退键返回不能返回到上一个页面中。
    <router-link to="/about" tag="button" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 第一种方式路由传参 -->
    <!-- <router-link :to="'/user/' + userId">用户</router-link>
    <router-link
      v-bind:to="{ path: '/profile', query: { name: 'why', height: 1.88 } }"
      >档案</router-link
    > -->
    <!-- 第二种方式路由传参 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
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
      // $router为vue-router源码里为每个组件添加的
      console.log("homeClick");
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.push("/about");
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          height: 1.88,
          name: "kobe8",
        },
      });
    },
  },
};
</script>

<style>
.active {
  color: blue;
}
</style>
