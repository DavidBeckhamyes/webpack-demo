<template>
  <div
    :style="{ color: isActive ? activeColor : '' }"
    class="tab-item"
    @click="itemClick"
  >
    <slot v-if="isActive" name="item-icon-active" />
    <slot v-else name="item-icon" />
    <slot name="item-text" />
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-item {
  text-align: center;
  height: 49px;
  flex: 1;
}

.active {
  color: red;
}
</style>