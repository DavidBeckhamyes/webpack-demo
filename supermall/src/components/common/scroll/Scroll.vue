<template>
  <!-- ref/ch ildren -->
  <!-- ref如果是绑定在组件中的，那么通过this.$refs.refname获取到的是一个组件对象 -->
  <!-- ref如果是绑定在元素中的，那么通过this.$refs.refname获取到的是一个元素对象 -->
  <!-- Better-Scroll在决定有多少区域可以滚动时，是由scrollerHeight属性决定。
  1.ScrollerHeight属性是根据放Better-Scroll的content中的子组件的高度决定
  2.但是我们的首页中，刚开始在计算ScrollerHeight属性时，是没有将图片计算在内的，所以计算出来的高度是错误的。
  3.后来图片加载进来之后有了新的高度，但是scrollerHeight属性并没有进行更新，所滚动出现了问题。
  解决问题
  1.监听每一张图片是否加载完成，只要有一张图片加载完成了，执行一次refresh()
    如何监听图片加载完成了？
        原生的js监听图片:img.onload = function () {}
        Vue监听:@load -->
  <div class="wrapper" ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      message: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    // // 3.监听上拉事件
    // this.scroll.on("pullingUp", () => {
    //   this.$emit("pullingUp");
    // });
  },
  methods: {
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log('-----')
    },
  },
};
</script>

<style scoped>
</style>