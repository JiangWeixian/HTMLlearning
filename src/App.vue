<template>
  <div id="app">
      <header v-show="isShow">
          <div class="main clearfix">
              <div class="pull-left">
                  <nav>
                      <a href="#" class="homepage-icon"><img src="./assets/img/avatar.jpg" alt="avatar"></a>
                      <a href="#" class="router-name"><span>{{ routerName }}</span></a>
                  </nav>
              </div>
              <div class="pull-right">
                  <div class="searcher">
                      <i class="material-icons search-icon" @click="search()">search</i>
                      <input type="text" id="SEARCHCONTENT" @keyup.enter="search()">
                  </div>
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
export default {
    name: 'app',
    data() {
        return {
            routerName: 'HOMEPAGE',
            isShow: true
        }
    },
    watch: {
        $route(to, from) {
            console.log(to)
            console.log(from)
            let path = to.path.split('/');
            this.routerName = path[1].toUpperCase()? path[1].toUpperCase(): 'HOMEPAGE';
            if (path.length > 2 && path[1].toLowerCase() === 'onepaper') {
                this.isShow = false
            }
            else {
                this.isShow = true
            }
        }
    },
    methods: {
        search() {
            let searchContent = document.querySelector('#SEARCHCONTENT').value;
            this.$store.dispatch('set_searchcontent', { searchContent });
        }
    },
    created() {
        let path = this.$route.path.split('/');
        this.routerName = path[1].toUpperCase()? path[1].toUpperCase(): 'HOMEPAGE';
        if (path.length > 2 && path[1].toLowerCase() === 'onepaper') {
            this.isShow = false
        }
        else {
            this.isShow = true
        }
    }
}
</script>

<style scoped>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    header {
        width: 100%;
        padding: 0.5rem 0;
        margin-bottom: 10rem;
        background-color: white;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
        position: fixed;
        z-index: 999;
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
    header .searcher {
        padding: 1rem 0 0 0;
        position: relative;
    }
    .searcher input {
        border-bottom: 1px solid #f5f5f5;
        padding: 0 1.5rem 0.2rem 0;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.5rem;
    }
    .searcher .search-icon {
        position: absolute;
        cursor: pointer;
        right: 0;
        top: 10px;
        color: #ccc;
    }
    footer {
        background-color: white;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        position: relative;
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
</style>
