<template>
  <div>
    <h2>我是Cpn组件的标题</h2>
    <p>我是Cpn组件的内容，哈哈哈</p>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Cpn组件的name",
    };
  },
  methods: {
    btnClick() {},
  },
};
</script>

<style scoped>
.title {
  color: green;
}
</style>