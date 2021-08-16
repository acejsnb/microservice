<template>
    <div class="home">
        <h3>我是Home</h3>
        <button @click="noticeHandle">打开Notice</button>
        <br><br><br>
        <router-link to="/test">到Test页 - 无参数</router-link>
        <br><br>
        <router-link to="/test/id123/鸿星尔克">到Test页</router-link>
    </div>
</template>

<script>
import Notice from 'component/notice';

export default {
    name: 'Home',
    data() {
        return {
        };
    },
    methods: {
        noticeHandle() {
            const notice = Notice({
                title: '我是全屏弹窗，我会在10000毫秒后自动关闭哦',
                message: '出错啦！！',
                dur: 10000
            });
        }
    }
};
</script>

<style lang="stylus">
.home
    font-size 14px

</style>
