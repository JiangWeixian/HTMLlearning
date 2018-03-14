<style scoped>
    .sidernav {
        overflow-x: visible;
    }
</style>

<template>
    <div id="SIDERNAV" class="sidernav">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sider-nav",
        methods: {
            bindEvent () {
                this.el.addEventListener('wheel', this.onWheelHandler, false)
            },
            onWheelHandler (e) {
                this.handleEventDelta(e, e.deltaY)
            },
            handleEventDelta (e, delta) {
                const isDeltaPositive = delta > 0;
                const el = this.el;
                const { scrollTop, scrollHeight, clientHeight } = el;

                let shouldCancelScroll = false;
                if (isDeltaPositive && delta > scrollHeight - clientHeight - scrollTop) {
                    // bottom limit
                    el.scrollTop = scrollHeight;
                    shouldCancelScroll = true
                } else if (!isDeltaPositive && -delta > scrollTop) {
                    // top limit
                    el.scrollTop = 0;
                    shouldCancelScroll = true
                }

                if (shouldCancelScroll) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    return false
                }
            },
            init () {
                this.el = document.querySelector('.sidernav');
                this.bindEvent()
            },
        },
        mounted () {
            this.init()
        },
    }
</script>


