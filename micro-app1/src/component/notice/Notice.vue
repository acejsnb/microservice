<template>
    <div class="notice">
        <div>{{title}}</div>
        <div>{{message}}</div>
    </div>
</template>

<script>
export default {
    name: 'Notice',
    props: {
        title: String,
        message: String,
        dur: {
            type: Number,
            default: 3000
        }
    },
    data() {
        return {
            age: 20
        };
    },
    mounted() {
        setTimeout(() => {
            this.remove();
        }, this.dur);
    },
    methods: {

    }
};
</script>

<style lang="stylus">
.notice
    position fixed
    left 0
    top 0
    z-index 1000
    background-color #fff
    width 100%
    height 100%

</style>
