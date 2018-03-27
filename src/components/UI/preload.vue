<template>
    <div class="preload">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "preload",
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
        methods: {
            init() { // 根据传入的参数初始化
                this.imgsSum = this.imgUrlArr.length
            },
            unorderedPreload() { // 无序加载，并发下载图片
                this.imgUrlArr.forEach((imgUrl, i) => {
                    var oImg = new Image();
                    oImg.addEventListener('load', this.imgLoaded);
                    oImg.addEventListener('error', this.imgLoaded);
                    oImg.src = imgUrl
                })
            },
            orderPreload() { // 有序加载，一次只有一张图片在下载
                var oImg = new Image();
                oImg.addEventListener('load', this.imgLoaded);
                oImg.addEventListener('error', this.imgLoaded);
                oImg.src = this.imgUrlArr[this.loadedCount]
            },
            imgLoaded() { // 每次图片加载完成执行，无论成功或者失败
                this.loadedCount++;
                if (this.loadedCount >= this.imgsSum) {
                    this.show = false;
                    this.$emit('imgAllLoaded')
                } else if (this.order) {
                    this.orderPreload()
                }
            }
        },
        created() {
            this.init();
            this.order ? this.orderPreload() : this.unorderedPreload()
        }
    }
</script>

<style scoped>

</style>
