<template>
    <div id="NEO" class="neo">
        <header>
            <nav class="clearfix">
                <div class="nav-left pull-left"><p class="neo-icon">NEO</p></div>
                <div class="nav-right pull-right">
                    <div class="search-wrapper">
                        <i class="material-icons search-icon">search</i>
                        <input type="text" v-model="searchContent">
                    </div>
                </div>
            </nav>
        </header>
        <ul class="neo-lists">
            <li class="neo-item" v-for="item in sortedPapers">
                <p class="neo-time">{{ item.time }} <span class="tag-bug" v-show="item.bug">BUG</span> </p>
                <div class="neo-bg">
                    <img :src="item.src" :alt="item.alt">
                    <div class="neo-info" :style="item.style" @click="link(item.id)">
                        <p class="neo-title">{{ item.title }}</p>
                        <p class="neo-detail">{{ item.detail }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "neo",
        data () {
            return {
                name: 'neo',
                searchContent: '',
                paperLists: ['loginBall','weather', 'cityInfo', 'shareCard', 'beginWithDogs'],
                papers: {
                    'loginBall': {
                        id: 'loginBall',
                        time: '2017-10-28',
                        src: require('../../assets/img/onePaper/loginBall.png'),
                        alt: 'login',
                        color: 'rgba(138, 0, 245, 0.9)',
                        title: '<login-ball>',
                        detail: '登录/弹珠',
                        bug: false
                    },
                    'weather': {
                        id: 'weather',
                        time: '2017-10-30',
                        src: require('../../assets/img/onePaper/weather.png'),
                        alt: 'weather',
                        color: 'rgba(67, 55, 26, 0.9)',
                        title: '<weather-card>',
                        detail: '天气/毛玻璃风格',
                        bug: false,
                    },
                    'cityInfo': {
                        id: 'cityInfo',
                        time: '2017-10-12',
                        src: require('../../assets/img/onePaper/cityInfo.png'),
                        alt: 'shanghai',
                        color: 'rgba(30, 0, 104, 0.9)',
                        title: '<city-info>',
                        detail: '城市卡片',
                        bug: false
                    },
                    'shareCard': {
                        id: 'shareCard',
                        time: '2017-10-28',
                        src: require('../../assets/img/onePaper/shareCard.png'),
                        alt: 'shareCard',
                        color: 'rgba(60, 136, 239, 0.9)',
                        title: '<share-card>',
                        detail: '分享卡片/仅有动画',
                        bug: true,
                    },
                    'beginWithDogs': {
                        id: 'beginWithDogs',
                        time: '2018-02-16',
                        src: require('../../assets/img/onePaper/beginWithDogs.png'),
                        alt: '2018',
                        color: 'rgba(255, 0, 0, 0.9)',
                        title: '<begin-with-dogs>',
                        detail: '2018, 开局一条狗',
                        bug: false
                    }
                }
            }
        },
        computed: {
            sortedPapers() {
                let neoPapers = this.paperLists.map((id) => {
                    var item =  this.papers[id],
                        tags = this.searchContent.toLocaleLowerCase();
                    item.style = {
                        background: 'linear-gradient(to right,' + item.color + ',rgba(255, 255, 255, 0.1))'
                    };
                    return item
                });
                console.log(neoPapers.slice())
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
                console.log(url)
                this.$router.push({ path: '/onePaper/'+ url })
            }
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.2);
        text-align: left;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 10;
        overflow: hidden;
        background-color: white;
        padding: 1rem 0 1rem 0;
    }
    .nav-left .neo-icon {
        font-family: 'Monoton', cursive;
        font-weight: normal;
        font-size: 3rem;
        color: gray;
        text-indent: 3rem;
        cursor: pointer;
    }
    .nav-right {
        width: 100px;
        padding-right: 15rem;
    }
    .nav-right .search-wrapper {
        position: relative;
        margin-top: 5px;
    }
    .search-wrapper .search-icon {
        position: absolute;
        left: 0.7rem;
        top: 0.3rem;
        color: #ccc;
    }
    .search-wrapper input {
        width: 20rem;
        height: 1.5rem;
        border: 1.5px solid #ccc;
        border-radius: 2rem;
        padding: 0.5rem;
        position: absolute;
        text-indent: 2.5rem;
    }
    .neo-lists {
        position: relative;
        left: 0;
        top: 8rem;
        z-index: 0;
    }
    .neo-item {
        display: block;
        width: 800px;
        margin: 0 auto;
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
        border-radius: 3px;
    }
    .neo-bg {
        height: 200px;
        margin-top: 1rem;
        margin-bottom: 3rem;
        text-align: left;
        position: relative;
    }
    .neo-bg img {
        width: 800px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
    }
    .neo-bg .neo-info {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
    .neo-info .neo-title {
        font-family: 'Roboto Mono', monospace;
        font-weight: bolder;
        font-size: 4rem;
        padding-top: 4rem;
    }
    .neo-info .neo-detail {
        font-family: 'Noto Sans', sans-serif;
        font-size: 1rem;
    }
</style>
