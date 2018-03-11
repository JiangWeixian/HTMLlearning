<template>
    <div id="NEO" class="neo">
        <ul class="neo-lists page-container">
            <li class="neo-item" v-for="item in sortedPapers">
                <p class="neo-time">{{ item.time }} <span class="tag-bug" v-show="item.bug">BUG</span> </p>
                <div class="paper card">
                    <div class="card-img" @click="link(item.router)">
                        <img :src="item.src" :alt="item.id">
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
    export default {
        name: "neo",
        data () {
            return {
                name: 'neo',
                paperLists: ['loginBall','weather', 'cityInfo', 'shareCard', 'beginWithDogs'],
                papers: {
                    'loginBall': {
                        id: 'loginBall',
                        router: '/onepaper/loginBall',
                        time: '2017-10-28',
                        src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/onepaper-loginball.png',
                        alt: 'login',
                        color: 'white',
                        title: '<login-ball>',
                        detail: '登录/弹珠',
                        bug: false
                    },
                    'weather': {
                        id: 'weather',
                        router: '/onepaper/weather',
                        time: '2017-10-30',
                        src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/onepaper-weather.png',
                        alt: 'weather',
                        color: 'white',
                        title: '<weather-card>',
                        detail: '天气/毛玻璃风格',
                        bug: false,
                    },
                    'cityInfo': {
                        id: 'cityInfo',
                        router: '/onepaper/cityInfo',
                        time: '2017-10-12',
                        src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/onepaper-city-info.png',
                        alt: 'shanghai',
                        color: 'white',
                        title: '<city-info>',
                        detail: '城市卡片',
                        bug: false
                    },
                    'shareCard': {
                        id: 'shareCard',
                        router: '/onepaper/shareCard',
                        time: '2017-10-28',
                        src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/onepaper-sharecard.png',
                        alt: 'shareCard',
                        color: 'white',
                        title: '<share-card>',
                        detail: '分享卡片/仅有动画',
                        bug: true,
                    },
                    'beginWithDogs': {
                        id: 'beginWithDogs',
                        router: '/onepaper/beginWithDogs',
                        time: '2018-02-16',
                        src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/onepaper-beginwithdogs.png',
                        alt: '2018',
                        color: 'black',
                        title: '<begin-with-dogs>',
                        detail: '2018, 开局一条狗',
                        bug: false
                    }
                }
            }
        },
        computed: {
            ...mapGetters({
                searchContent: 'get_seachcontent'
            }),
            sortedPapers() {
                let neoPapers = this.paperLists.map((id) => {
                    var item =  this.papers[id],
                        tags = this.searchContent.toLocaleLowerCase();
                    item.style = {
                        color: item.color
                    };
                    return item
                });
                let sortedNeoPapers = neoPapers
                    .slice()
                    .sort((a, b) => {
                        var aTime = new Date(a.time),
                            bTime = new Date(b.time);
                        return aTime - bTime
                    })
                return sortedNeoPapers.filter(item => item.detail.includes(this.searchContent))
            }
        },
        methods: {
            link(url) {
                this.$router.push({ path: url })
            }
        }
    }
</script>

<style scoped>
    .neo-item {
        display: block;
        width: 800px;
        margin: 0 auto;
        padding-bottom: 1.5rem;
    }
    .neo-time {
        text-align: left;
        font-family: 'Roboto Mono', monospace;
        font-weight: bolder;
        font-size: 1.5rem;
        line-height: 1.5rem;
        position: relative;
        color: #ccc;
    }
    .neo-time::before {
        content: ' ';
        width: 10px;
        height: 10px;
        border-radius: 5px;
        display: block;
        background: #ccc;
        position: absolute;
        left: -20px;
        top: 5px;
    }
    .neo-time .tag-bug {
        color: white;
        background-color: red;
        font-size: 1rem;
        line-height: 1rem;
        font-weight: normal;
        padding: 0.2rem;
    }
    .neo-item .card-title {
        font-size: 2rem;
    }
</style>
