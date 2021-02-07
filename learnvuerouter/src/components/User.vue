<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户的相关信息，嘿嘿嘿</p>
        <h2>{{$route.parameters.userId}}</h2>
    </div>
</template>

<script>
export default {
    name: "User"
}
</script>

<style scoped>

</style>