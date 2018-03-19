<style scoped>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    header {
        width: 100%;
        padding: 0 0 6px 0;
        margin-bottom: 120px;
        background-color: white;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
    }
    header .main {
        width: 65%;
        margin: 0 auto;
    }
    header nav .router-name, header nav .homepage-icon {
        display: inline-block;
        vertical-align: middle;
    }
    header nav .router-name {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        color: #ccc;
        text-indent: 12px;
    }
    header nav .router-name:hover {
        color: #0c72ee;
    }
    header nav .homepage-icon img{
        width: 37px;
        height: 37px;
        object-fit: cover;
        border-radius: 100px;
    }
    .global-searcher {
        line-height: 36px;
    }
    footer {
        display: flex;
        width: 100%;
        background-color: white;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        position: relative;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 99;
    }
    footer .main {
        width: 65%;
        margin: 0 auto;
        padding: 24px 0;
        text-align: left;
        text-indent: 6px;
    }
    footer .author {
        font-size: 20px;
        font-weight: bolder;
    }
    footer .copyright {
        padding-top: 6px;
        font-size: 12px;
    }
    footer .linkme {
        margin: 18px 0 0 0;
    }
    footer .linkme ul {
        list-style: none;
    }
    footer .linkme ul li img {
        width: 24px;
        height: 24px;
    }

    @media screen and (max-width: 1280px){
        header .main {
            width: 70%;
        }
        footer .main {
            width: 70%;
        }
    }

    @media screen and (max-width: 1024px){
        header .main {
            width: 90%;
        }
        footer .main {
            width: 90%;
        }
    }

    @media screen and (max-width: 750px){
        header {
            margin-bottom: 0;
        }
        header .main {
            width: 95%;
        }
        header .main .homepage-icon img {
            width: 72px;
            height: 72px;
            object-fit: cover;
            border-radius: 100px;
        }
        header .main .router-name {
            display: none;
        }
        .searcher-wrapper {
            width: 80%;
        }
        .global-searcher {
            line-height: 72px;
        }
        footer {
            display: none;
        }
    }

    @media screen and (max-width: 375px){
        header {
            background-color: red;
        }

    }

    @media screen and (max-width: 320px){
        .searcher-wrapper {
            width: 85%;
        }

    }

</style>

<template>
  <div id="app">
      <header v-show="isShow">
          <div class="main clearfix">
              <div class="pull-left">
                  <nav>
                      <a href="#" class="homepage-icon" @click.prevent="slideIn()"><img src="./assets/img/avatar.jpg" alt="avatar"></a>
                      <a href="#" class="router-name"><span>{{ routerName }}</span></a>
                  </nav>
              </div>
              <div class="pull-right searcher-wrapper">
                  <searcher class="global-searcher" @search="search" :lh="75"></searcher>
              </div>
          </div>
      </header>
      <router-view></router-view>
      <footer v-show="isShow">
          <div class="main clearfix">
              <div class="pull-left">
                  <p class="author">蒋微咸</p>
                  <p class="copyright">本教程为我的原创文章，请转载本文时告知作者并载明原文出处。</p>
              </div>
              <div class="pull-right">
                  <address class="linkme">
                      <ul>
                          <li><a href="https://www.github.com"><img src="./assets/icons/GitHub.svg" alt="githublink"></a></li>
                      </ul>
                  </address>
              </div>
          </div>
      </footer>
  </div>
</template>

<script>
import Searcher from "./components/UI/searcher";

export default {
    components: {Searcher},
    name: 'app',
    data() {
        return {
            routerName: 'HOMEPAGE',
            isShow: true,
            searchContent: '',
        }
    },
    watch: {
        $route(to, from) {
            let path = to.path.split('/');
            this.routerName = to.name.toUpperCase();
            this.isShow = path.length > 2 && path[1].toLowerCase() === 'onepaper'? false:true;
        }
    },
    methods: {
        search({ searchContent }) {
            this.$store.dispatch('set_searchcontent', { searchContent: searchContent });
        },
        slideIn() {
            let siderNav = document.querySelector('.personal-siderbar'),
                siderCover = document.querySelector('.sider-cover'),
                homeMain = document.querySelector('body'),
                width = document.documentElement.clientWidth || document.body.clientWidth;
            if (width <= 940) {
                siderCover.classList.add('show');
                homeMain.classList.add('hidden');
                Velocity(siderNav, {left: 0}, {duration: 300, easing: "easeOutQuart"})
            }
        }
    },
    created() {
        let path = this.$route.path.split('/');
        this.routerName = this.$route.name.toUpperCase();
        this.isShow = path.length > 2 && path[1].toLowerCase() === 'onepaper'? false:true;
    }
}
</script>


