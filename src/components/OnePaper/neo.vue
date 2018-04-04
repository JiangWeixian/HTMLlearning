<style scoped>
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
    <div id="NEO" class="neo">
        <ul class="neo-lists page-container">
            <!--<preload :img-url-arr="sortedPapers" :order="true"></preload>-->
            <li class="neo-item" v-for="item in sortedPapers" :ref="item.id">
                <p class="neo-time">{{ item.time }} <span class="tag-bug" v-show="item.bug">BUG</span> </p>
                <div class="paper card">
                    <div class="card-img" @click="link(item.router)">
                        <img src="https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/onepaper-city-info.png" :data-src="item.src" :alt="item.id" :ref="item.id">
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
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Preload from "../UI/preload";
    export default {
        components: {Preload},
        name: "neo",
        data () {
            return {
                name: 'neo',
                itemIdx: 0,
                itemCnt: 0,
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
            sortedPapers() {
                let projectLists = this.$store.getters.get_single_project('onepaper');
                let sortedNeoPapers = projectLists
                    .slice()
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
            }
        },
        mounted() {
            this.$nextTick(function () {
                document.documentElement.scrollTop = 10  
            })
        },
        methods: {
            link(url) {
                this.$router.push({ path: url })
            },
            imgAllLoaded(data) {
                console.log(data)
            },
            onScrollHandler() {
                let seeHeight = document.documentElement.clientHeight,
                    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                Object.keys(this.$refs).slice(this.itemIdx, this.$refs.length).map((id, index) => {
                    let domItem = this.$refs[id][1],
                        domItemImg = this.$refs[id][0];
                    if (domItem.offsetTop < seeHeight + scrollTop) {
                        if (domItemImg.src === "https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/onepaper-city-info.png") {
                            domItemImg.src = domItemImg.getAttribute("data-src");
                        }
                    }
                    this.itemIdx = index
                })
            },
            bindEvent() {
                window.addEventListener('scroll', this.onScrollHandler, false)
            },
            init() {
                this.bindEvent();
            }
        },
        created() {
            this.$store.dispatch('set_single_project', { projectName: 'onepaper' })
            this.init()
        }
    }
</script>


