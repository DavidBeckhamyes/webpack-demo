<template>
  <a-layout id="homeLayout" :style="{ overflow: 'auto', height: '100vh' }">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <!--这个位置可以放上面讲到的menu代码-->
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          class="triggerIcon headTool"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '1.5vh 10px',
          padding: '10px',
          background: '#fff',
          height: '90vh',
        }"
      >
        <!--行内样式记得写成class-->
        Content
      </a-layout-content>
      <a-layout-footer> xxx ©2018 Created by Ant UED </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
</style>
