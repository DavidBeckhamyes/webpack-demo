<template>
  <div id="tab-bar">
    <TabBarItem path="/home" activeColor="blue">
      <i slot="item-icon" class="iconfont iconshangcheng-shouye-xian"></i>
      <i
        slot="item-icon-active"
        class="iconfont iconshangcheng-fenlei-mian"
      ></i>
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="blue">
      <i slot="item-icon" class="iconfont iconshangcheng-fenlei-xian"></i>
      <i
        slot="item-icon-active"
        class="iconfont iconshangcheng-fenlei-mian"
      ></i>
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="blue">
      <i slot="item-icon" class="iconfont iconshangcheng-gouwuche-xian"></i>
      <i
        slot="item-icon-active"
        class="iconfont iconshangcheng-gouwuche-mian"
      ></i>
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="blue">
      <i slot="item-icon" class="iconfont iconshangcheng-wode-xian"></i>
      <i slot="item-icon-active" class="iconfont iconshangcheng-wode-mian"></i>
      <div slot="item-text">我的</div>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";

export default {
  name: "TabBar",
  components: {
    TabBarItem,
  },
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