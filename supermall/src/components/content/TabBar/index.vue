<template>
  <div id="tab-bar">
    <TabBarItem path="/home" activeColor="blue">
      <template v-slot:item-icon>
        <i class="iconfont iconshangcheng-shouye-xian"></i>
      </template>
      <template v-slot:item-icon-active>
        <i class="iconfont iconshangcheng-shouye-mian"></i>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="blue">
      <template v-slot:item-icon>
        <i class="iconfont iconshangcheng-fenlei-xian"></i>
      </template>
      <template v-slot:item-icon-active>
        <i class="iconfont iconshangcheng-fenlei-mian"></i>
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="blue">
      <template v-slot:item-icon>
        <i class="iconfont iconshangcheng-gouwuche-xian"></i>
      </template>
      <template v-slot:item-icon-active>
        <i class="iconfont iconshangcheng-gouwuche-mian"></i>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="blue">
      <template v-slot:item-icon>
        <i class="iconfont iconshangcheng-wode-xian"></i>
      </template>
      <template v-slot:item-icon-active>
        <i class="iconfont iconshangcheng-wode-mian"></i>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "components/common/TabBarItem";

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