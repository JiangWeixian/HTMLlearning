<style scoped>
    
</style>


<template>
    <div id="DRAWER" class="drawer paper">
        <div class="drawer-wrapper">
            <div class="order drawer-title clearfix" @click="dropUp()">
                <p class="title-icon pull-left"><i class="material-icons lh-36">{{ iconName }}</i></p>
                <p class="title-name pull-left">{{ titleName }}</p>
                <p class="title-switch pull-right"><i class="material-icons lh-36">more_vert</i></p>
            </div>
            <div class="drawer-container-wrapper" ref="containerWrapper">
                <slot></slot>
                <div class="drawer-hander" @click="dropDown()">
                    <i class="material-icons">keyboard_arrow_up</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  Velocity from 'velocity-animate'
    export default {
        name: "drawer",
        data() {
            return {
                name: 'drawer'
            }
        },
        props: ['iconName', 'titleName'],
        methods: {
            dropDown() {
                let drawer = this.$refs.containerWrapper;
                Velocity(drawer, {height: '0'}, {duration: 100, easing: "easeInSine"})
            },
            dropUp() {
                let drawer = this.$refs.containerWrapper,
                    container = drawer.querySelector('.drawer-container'),
                    hander = drawer.querySelector('.drawer-hander');
                let height = container.offsetHeight + hander.offsetHeight;
                Velocity(drawer, {height: height }, {duration: 100, easing: "easeInSine"})
            }
        }
    }
</script>
