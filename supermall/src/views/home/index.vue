<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll
      @scroll="contentScroll"
      @pullingUp="loadMore"
      class="content"
      ref="scroll"
      :pull-up-load="true"
      :probe-type="3"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
// import { onMounted } from "vue";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  // Options API
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  methods: {
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.banner.list;
        this.recommends = res.recommend.list;
        console.log("banner广告位=>", this.banners);
      });
    },

    getHomeGoods(type) {
      console.log(this.goods[type]);

      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },

    /**
     * 事件监听的相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /**
     * 回到顶部
     */
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },

    /**
     * 滑动监听
     */
    contentScroll(position) {
      this.isShowBackTop = Math.abs(position.y) > 1000;
    },

    loadMore() {
      this.getHomeGoods(this.currentType);
    },
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
  height: calc(100vh - 49px);
}
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
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

.tab-control {
  position: sticky;
  top: 44px;
  background-color: #ffffff;
  z-index: 9;
}
</style>