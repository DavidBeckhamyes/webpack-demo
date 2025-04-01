<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户的相关信息，嘿嘿嘿</p>
        <!-- $route表示正处于活跃状态的路由 -->
        <h2>{{$route.params.userId}}</h2>
    </div>
</template>

<script>
export default {
    name: "User"
}
</script>

<style scoped>

</style>