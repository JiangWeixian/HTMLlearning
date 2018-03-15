<style scoped>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    header {
        width: 100%;
        padding: 0.7rem 0 0.5rem 0;
        margin-bottom: 10rem;
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
    header nav .router-name, .homepage-icon {
        display: inline-block;
        vertical-align: middle;
    }
    header nav .router-name {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        color: #ccc;
        text-indent: 1rem;
    }
    header nav .router-name:hover {
        color: #0c72ee;
    }
    header nav .homepage-icon img{
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border-radius: 3rem;
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
        padding: 2rem 0;
        text-align: left;
        text-indent: 0.5rem;
    }
    footer .author {
        font-size: 2rem;
        font-weight: bolder;
    }
    footer .copyright {
        padding-top: 0.5rem;
        font-size: 1rem;
    }
    footer .linkme {
        margin: 1.5rem 0 0 0;
    }
    footer .linkme ul {
        list-style: none;
    }
    footer .linkme ul li img {
        width: 2rem;
        height: 2rem;
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

    @media screen and (max-width: 425px){
        header .main {
            width: 95%;
        }
        header .main .router-name {
            display: none;
        }
        .searcher-wrapper {
            width: 88%;
        }
        footer {
            display: none;
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
                  <searcher @search="search"></searcher>
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


