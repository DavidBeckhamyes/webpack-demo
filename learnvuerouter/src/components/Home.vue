<!--  -->
<template>
  <div class="">
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      path: "/home/news"
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log("home created")
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    console.log("home destroyed")
  }, //生命周期 - 销毁完成
  activated() {
    this.$router.push(this.path)
  }, //如果页面有keep-alive缓存功能，这个函数会触发
  beforeRouteLeave (to, from, next) {
    // 导航离开该组建的对应路由时调用
    this.path = this.$route.path  
    // 可以访问组件实例`this`
    next()
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>