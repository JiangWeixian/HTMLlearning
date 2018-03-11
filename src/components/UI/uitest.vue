<template>
    <div id="SIDERNAV" class="sidernav">
        <div class="sidernav-wrapper">
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "uitest",
        methods: {
            bindEvent () {
                this.el.addEventListener('wheel', this.onWheelHandler, false)
            },
            onWheelHandler (e) {
                this.handleEventDelta(e, e.deltaY)
            },
            handleEventDelta (e, delta) {
                const isDeltaPositive = delta > 0
                const el = this.el
                const { scrollTop, scrollHeight, clientHeight } = el
                console.log(scrollTop, scrollHeight, clientHeight, delta)

                let shouldCancelScroll = false
                if (isDeltaPositive && delta > scrollHeight - clientHeight - scrollTop) {
                    // bottom limit
                    el.scrollTop = scrollHeight
                    shouldCancelScroll = true
                } else if (!isDeltaPositive && -delta > scrollTop) {
                    // top limit
                    el.scrollTop = 0
                    shouldCancelScroll = true
                }

                if (shouldCancelScroll) {
                    e.stopImmediatePropagation()
                    e.preventDefault()
                    return false
                }
            },
            init () {
                this.el = document.querySelector('.sidernav-wrapper')
                this.bindEvent()
            },
        },
        mounted () {
            this.init()
        },
    }
</script>

<style scoped>
    .sidernav {
        overflow: hidden;
        height: calc(100vh + 20rem);
        background-color: green;
    }
    .sidernav-wrapper {
        overflow: auto;
        background-color: white;
        width: 400px;
        height: 500px;
    }
    .one {
        height: 500px;
        width: 200px;
    }
    .one:nth-child(1) {
        background-color: red;
    }
    .one:nth-child(2) {
        background-color: black;
    }
    .one:nth-child(3) {
        background-color: blue;
    }
    .one:nth-child(4) {
        background-color: yellow;
    }
</style>
