<template>
  <div v-show="isShow" class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  //   props: {
  //     message: {
  //       type: String,
  //       default: "",
  //     },
  //     show: {
  //         type: Boolean,
  //         default: false
  //     }
  //   },
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, duration) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%, -50%);

  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>