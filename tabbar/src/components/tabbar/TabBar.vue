<template>
  <div id="tab-bar">
    <div class="tab-item">
      <i class="iconfont iconshangcheng-shouye-xian"></i>
      首页
    </div>
    <div class="tab-item">
      <i class="iconfont iconshangcheng-fenlei-xian"></i>
      分类
    </div>
    <div class="tab-item">
      <i class="iconfont iconshangcheng-gouwuche-xian"></i>
      购物车
    </div>
    <div class="tab-item">
      <i class="iconfont iconshangcheng-wode-xian"></i>
      我的
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>