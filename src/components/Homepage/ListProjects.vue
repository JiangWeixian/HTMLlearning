<template>
  <div class="list projects">
        <li class="paper card"
            v-for="item in projectLists"
            :key="item.id">
            <div class="card-img" @click="link(item.router)">
                <img src="../../assets/img/default.png" :data-src="item.src" :alt="item.id" ref="li">
                <div class="card-intro" :style="item.style">
                    <p class="card-title">{{ item.title }}</p>
                    <p class="card-time">{{ item.time }}</p>
                </div>
            </div>
            <div class="card-content">
                <p>{{ item.content }}</p>
            </div>
        </li>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    let setSrc = function (el, src) {
        el.src = src
    }

    export default {
        name: 'ListProjects',
        data() {
            return {
                name: 'ListProjects'
            }
        },
        mounted() {
            this.$nextTick(()=> {
                this.init()
            })
        },
        computed: {
            ...mapGetters({
                projectLists: 'get_projectlists'
            })
        },
        methods: {
            link(url) {
                if (url === '/onepaper') {
                    this.$router.push({ path: url })
                } else {
                    window.open(url)
                }
            },
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
                    preload(this.projectLists[index].src)
                })
            }
        }
    }
</script>

<style scoped>

</style>
