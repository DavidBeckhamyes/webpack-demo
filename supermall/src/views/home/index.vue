<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlTop"
      class="tab-control-top"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      @scroll="contentScroll"
      @pullingUp="loadMore"
      class="content"
      ref="scroll"
      :pull-up-load="true"
      :probe-type="3"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
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

import { debounce } from "common/utils";

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
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0, // 页面离开时滚动的高度
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

  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    // 监听item中图片加载完成
    this.$bus.on("itemImageLoad", () => {
      // this.$refs.scroll.refresh();
      refresh();
    });
    // 2.获取tabControl的offsetTop
    // 所有的组件都有一个属性$el：用于获取组件中的元素，未必准确，因为图片有可能未加载完
    // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
  },

  unmounted() {
    console.log("home destroyed");
  },

  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
    // 为了解决可能滚动会失效，所以刷新
    this.$refs.scroll.refresh();
  },

  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },

  methods: {
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log("banner广告位=>", this.banners);
      });
    },

    getHomeGoods(type) {
      console.log(this.goods[type]);

      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
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
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlTop.currentIndex = index;
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
      // 1.判断BackTop是否显示
      this.isShowBackTop = Math.abs(position.y) > 1000;
      // 2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop - 44;
    },

    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
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
  /* padding-top: 44px; */
  /* height: calc(100vh - 49px); */
}
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;

  /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.tab-control-top {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 9;
  background-color: #ffffff;
}
</style>