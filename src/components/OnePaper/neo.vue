<style scoped>
    .neo {
        height: 100%;
        overflow: auto;
    }
    .neo-item {
        display: block;
        width: 40%;
        margin: 0 auto;
    }
    .neo-time {
        text-align: left;
        font-family: 'Roboto Mono', monospace;
        font-weight: bolder;
        font-size: 32px;
        line-height: 16px;
        position: relative;
        color: #ccc;
        margin-top: 48px;
    }
    .neo-time::before {
        content: ' ';
        width: 20px;
        height: 20px;
        border-radius: 20px;
        display: block;
        background: #ccc;
        position: absolute;
        left: -40px;
        top: 0px;
    }
    .neo-time .tag-bug {
        color: white;
        background-color: red;
        font-size: 24px;
        line-height: 24px;
        font-weight: normal;
        padding: 4px 6px;
    }
    .neo-item .card-title {
        font-size: 28px;
    }

    @media screen and (max-width: 1440px) {
        .neo-item {
            width: 60%;
        }
    }

    @media screen and (max-width: 1024px) {
        .neo-item {
            width: 80%;
        }
    }

    @media screen and (max-width: 750px) {
        .neo-time {
            display: none;
        }
        .neo-item {
            width: 95%;
        }
    }
</style>


<template>
    <div id="NEO" class="neo page-container" ref="neo">
        <ul class="neo-lists">
            <li class="neo-item" v-for="item in sortedPapers">
                <p class="neo-time">{{ item.time }} <span class="tag-bug" v-show="item.bug">BUG</span> </p>
                <div class="paper card">
                    <div class="card-img" @click="link(item.router)">
                        <img :src="defaultImg" :data-src="item.src" :alt="item.id" ref="li">
                        <div class="card-intro" :style="item.style">
                            <p class="card-title">{{ item.title }}</p>
                            <p class="card-time">{{ item.time }}</p>
                        </div>
                    </div>
                    <div class="card-content">
                        <p>{{ item.detail }}</p>
                    </div>
                </div>
            </li>
        </ul>
        <preload 
          :img-url-arr="imgUrls" 
          :order="true"
          v-show="isLoading" 
          @imgAllLoaded="_setCnt">
        </preload>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Preload from "../UI/preload";
    import InfCircleLoader from "../UI/InfCircleLoader";
    export default {
        components: {
            InfCircleLoader,
            Preload},
        name: "neo",
        data () {
            return {
                name: 'neo',
                itemIdx: 0,
                itemCnt: 3,
                limit: 3,
                defaultImg: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/dev/src/assets/img/default.png'
            }
        },
        watch: {
            $refs(val, newval) {
                console.log(val)
            }
        },
        computed: {
            ...mapGetters({
                searchContent: 'get_seachcontent'
            }),
            neos() {
                let projectLists = this.$store.getters.get_single_project('onepaper');
                return projectLists
            },
            totalCnt() {
                return this.neos.length
            },
            sortedPapers() {
                let sortedNeoPapers = this.neos
                    .slice(0, this.itemCnt)
                    .sort((a, b) => {
                        var aTime = new Date(a.time),
                            bTime = new Date(b.time);
                        return aTime - bTime
                    });
                return sortedNeoPapers.filter(item => item.detail.includes(this.searchContent))
            },
            imgUrls() {
                return this.sortedPapers.map((item) => {
                    return item.src
                })
            },
            isLoading() {
                return this.itemCnt <= this.totalCnt
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.init()
            })
        },
        methods: {
            link(url) {
                this.$router.push({ path: url })
            },
            _setCnt(cnt) {
                console.log(cnt)
                if (this.itemCnt < this.totalCnt) {
                    this.itemCnt += this.limit
                }
            },
            onScrollHandler() {
                let seeHeight = this.$refs.neo.offsetHeight,
                    scrollTop = this.$refs.neo.scrollTop
                this.$refs.li.map((item, index) => {
                    let imgTop = item.offsetHeight * index
                    if (imgTop < seeHeight + scrollTop) {
                        if (item.src === this.defaultImg) {
                            item.src = item.getAttribute("data-src")
                        }   
                    }
                })
            },
            bindEvent() {
                this.$refs.neo.addEventListener('scroll', this.onScrollHandler, false)
            },
            init() {
                this.bindEvent();
            }
        },
        created() {
            this.$store.dispatch('set_single_project', { projectName: 'onepaper' })
        }
    }
</script>


