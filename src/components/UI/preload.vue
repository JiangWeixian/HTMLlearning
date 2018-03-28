<template>
    <div class="preload">
        <p>{{ loadedCnt }}</p>
    </div>
</template>

<script>
    export default {
        name: "preload",
        data() {
            return {
                loadedCnt: 0
            }
        },
        props: {
            imgUrlArr: {
                type: Array,
                required: true,
            },
            order: {
                type: Boolean,
                default: true
            },
        },
        watch: {
            imgUrlArr(val, oldVal) {
                this.init();
                this.order ? this.orderPreload() : this.unorderedPreload()
            }
        },
        methods: {
            init() {
                this.imgsSum = this.imgUrlArr.length
            },
            unorderedPreload() {
                this.imgUrlArr.forEach((imgUrl, i) => {
                    var oImg = new Image();
                    oImg.addEventListener('load', this.imgLoaded);
                    oImg.addEventListener('error', this.imgLoaded);
                    oImg.src = imgUrl
                })
            },
            orderPreload() {
                var oImg = new Image();
                oImg.addEventListener('load', this.imgLoaded);
                oImg.addEventListener('error', this.imgLoaded);
                oImg.src = this.imgUrlArr[this.loadedCnt]
            },
            imgLoaded() {
                this.loadedCnt++;
                if (this.loadedCnt >= this.imgsSum) {
                    this.show = false;
                    this.$emit('imgAllLoaded', this.loadedCnt)
                } else if (this.order) {
                    this.orderPreload()
                }
            }
        }
    }
</script>

<style scoped>

</style>
