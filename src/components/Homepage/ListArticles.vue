<template>
    <div class="list articles">
            <li class="paper card"
                v-for="item in articleLists"
                :key="item.id">
                <a class="card-img" :href="item.router">
                    <img src="../../assets/img/default.png" :data-src="item.src" :alt="item.id" ref="li">
                    <div class="card-intro" :style="item.style">
                        <p class="card-title">{{ item.title }}</p>
                        <p class="card-time">{{ item.time }}</p>
                    </div>
                </a>
                <div class="card-content">
                    <p>{{ item.content }}</p>
                </div>
            </li>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Preload from '../UI/preload'

    let setSrc = function (el, src) {
        el.src = src
    }

    export default {
        name: 'ListArticles',
        computed: {
            ...mapGetters({
                articleLists: 'get_articlelists',
                articleLens: 'get_articlelens'
            })
        },
        mounted() {
            this.$nextTick(()=> {
                this.init()
            })
        },
        methods: {
            preLoad (el) {
                let img = new Image(),
                    imgNode = el
                img.onload = function () {
                    setSrc(imgNode, this.src)
                }
                return function (src) {
                    setSrc(imgNode, require('../../assets/img/default.png'))
                    img.src = src
                }
            },
            init() {
                this.$refs.li.forEach((item, index)=> {
                    let preload = this.preLoad(item)
                    preload(this.articleLists[index].src)
                })
            }
        }
    }
</script>

<style scoped>

</style>
