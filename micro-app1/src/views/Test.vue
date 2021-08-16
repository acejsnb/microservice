<template>
    <div class="test">
        <h3>我是Test</h3>
        Test - {{id}} - {{text}}
        <br><br>
        <router-link to="/">到Home页</router-link>
        <button @click="getData">接口测试</button>
    </div>
</template>

<script>
export default {
    name: 'Test',
    props: {
        id: String,
        text: String
    },
    data() {
        return {
        };
    },
    methods: {
        getData() {}
    }
};
</script>

<style lang="stylus">
.test
    font-size 14px

</style>
