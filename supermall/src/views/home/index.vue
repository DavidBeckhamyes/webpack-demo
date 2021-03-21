<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView"
// import { onMounted } from "vue";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  // Options API
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.banner.list;
      this.recommends = res.recommend.list
      console.log(this.banners);
    });
  },

  // vue3.0方式
  // setup() {
  //   // Composition API
  //   onMounted(() => {
  //     console.log('++++++ mounted 2')
  //   })
  // }
};
</script>

<style scoped>
 #home {
   padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>