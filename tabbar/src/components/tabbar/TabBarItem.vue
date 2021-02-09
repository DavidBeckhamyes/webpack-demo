<template>
    <div class="tab-item">
        <slot name="" />
        <slot name="" />
    </div>
</template>

<script>
export default {
    name: "TabBarItem"
}
</script>

<style scoped>
.tab-item {
  text-align: center;
  height: 49px;
  flex: 1;
}
</style>