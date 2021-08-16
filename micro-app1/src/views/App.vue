<template>
    <div class="app">
        <h1>App</h1>
        <img src="~assets/qk-logo.png" alt="">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style lang="stylus">
.app
    background-color #fff
    width 100%
    height 100%
    > img
        width 180px

</style>
