<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <TabBar />
  </div>
</template>

<script>
import TabBar from "components/content/TabBar";

export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
@import "assets/icon-font/iconfont.css";
</style>
