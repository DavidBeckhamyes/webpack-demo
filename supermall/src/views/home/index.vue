<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
// import { onMounted } from "vue";

export default {
  name: "home",
  components: {
    NavBar,
  },
  data() {
    return {
      banners: []
    };
  },
  // Options API
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.banner.list
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
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>