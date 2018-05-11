<style scoped>
    .home {
        background-color: #f5f5f5;
        height: 100%;
        overflow: auto;
    }
    ul {
        list-style: none;
    }
    .home-main {
        width: 65%;
        margin: 0 auto;
    }
    .sider-cover {
        background-color: rgba(0, 0, 0, 0.2);
        position: fixed;
        z-index: 100;
        display: none;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .personal-siderbar {
        width: 29%;
        margin-top: 12px;
    }
    .personal-info {
        margin-top: 12px;
    }
    .personal-info .personal-bg img {
        width: 100%;
        object-fit: cover;
    }
    .personal-info .personal-content {
        text-align: left;
        position: relative;
        font-size: 28px;
        padding-bottom: 12px;
    }
    .personal-info .personal-content img {
        position: absolute;
        left: 24px;
        top: -120px;
        width: 180px;
        height: 180px;
        border-radius: 200px;
        border: 6px solid white;
        object-fit: cover;
    }
    .personal-info .personal-content > * {
        text-indent: 28px;
        font-family: 'Noto Sans', sans-serif;
    }
    .personal-info .personal-content h1 {
        padding-top: 100px;
        font-size: 36px;
    }
    .homepage-info {
        font-family: 'Noto Sans', sans-serif;
        text-align: justify;
    }
    .homepage-info li:hover {
        background-color: #f5f5f5;
    }


    .blog-content {
        width: 68%;
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px){
        .home-main {
            width: 70%;
        }
    }

    @media screen and (max-width: 1024px) {
        .home-main {
            width: 90%;
        }
    }

    @media screen and (max-width: 750px){
        ::-webkit-scrollbar {
            width: 0px;
        }
        .page-container {
            height: calc(100vh - 174px);
        }
        .home-main {
            width: 95%;
        }
        .home-main .personal-siderbar {
            display: block;
            margin: 0;
            position: fixed;
            width: 70%;
            height: 100vh;
            background-color: white;
            overflow: auto;
            left: -100%;
            top: 0;
            z-index: 102;
            box-shadow: 1px 0px 10px 0 rgba(0, 0, 0, 0.1);
        }
        .home-main .personal-siderbar .paper {
            box-shadow: none;
            margin: 0;
        }
        .home-main .personal-siderbar .personal-info {
            border-bottom: 1px solid #f5f5f5;
        }
        .home-main .personal-siderbar .drawer {
            box-shadow: none;
            margin: 0;
        }
        .home-main .blog-content {
            width: 100%;
        }
        .homepage-info {
            font-family: 'Noto Sans', sans-serif;
            text-align: justify;
        }
        .mutiltype-lister .selector {
            width: 100%;
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 101;
            margin: 0!important;
        }
        .mutiltype-lister .selector .selected-name {
            width: 49%;
            margin: 0;
        }
        .mutiltype-lister .container li:last-child {
            margin-bottom: 100px;
        }
    }

</style>

<template>
  <div id="HOMEPAGE" class="home page-container">
      <div class="home-main clearfix">
          <sider-nav class="personal-siderbar pull-left">
              <section class="personal-info paper">
                  <div>
                      <div class="personal-bg">
                          <img src=".././assets/img/avatar.jpg" alt="" class="avatar">
                      </div>
                      <div class="personal-content">
                          <img src=".././assets/img/avatar.jpg" alt="" class="avatar">
                          <h1>蒋微咸</h1>
                          <p>杭州电子科技大学</p>
                      </div>
                  </div>
              </section>
              <section class="homepage-info paper">
                  <ul>
                      <li class="title"><p>发布的文章 </p><span>{{ articleLens }}</span></li>
                      <li class="title"><p>维护的项目 </p><span>{{ projectLens }}</span></li>
                  </ul>
              </section>
              <section class="stack-info">
                  <drawer icon-name="web" title-name="前端技术栈">
                      <ul class="drawer-container">
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="4.053333333333334rem" height="1.3866666666666667rem"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px"><p data-v-67a2f1ed="" class="badge-header" style="background-color: rgb(244, 67, 54); padding: 0.32rem; display: inline-block; font-size: 0.32rem; font-weight: bolder; letter-spacing: 0.05rem; text-align: center;">skill</p> <p data-v-67a2f1ed="" class="badge-tail" style="background-color: rgb(211, 47, 47); padding: 0.32rem; display: inline-block; font-size: 0.32rem; letter-spacing: 0.05rem; text-align: center;">html</p></div></foreignObject></svg>
                          </li>
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="3.68rem" height="1.3866666666666667rem"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px"><p data-v-67a2f1ed="" class="badge-header" style="background-color: rgb(156, 39, 176); padding: 0.32rem; display: inline-block; font-size: 0.32rem; font-weight: bolder; letter-spacing: 0.05rem; text-align: center;">skill</p> <p data-v-67a2f1ed="" class="badge-tail" style="background-color: rgb(123, 31, 162); padding: 0.32rem; display: inline-block; font-size: 0.32rem; letter-spacing: 0.05rem; text-align: center;">css</p></div></foreignObject></svg>
                          </li>
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="3.4133333333333336rem" height="1.3866666666666667rem"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px"><p data-v-67a2f1ed="" class="badge-header" style="background-color: rgb(255, 235, 59); padding: 0.32rem; display: inline-block; font-size: 0.32rem; font-weight: bolder; letter-spacing: 0.05rem; text-align: center;">skill</p> <p data-v-67a2f1ed="" class="badge-tail" style="background-color: rgb(251, 192, 45); padding: 0.32rem; display: inline-block; font-size: 0.32rem; letter-spacing: 0.05rem; text-align: center;">js</p></div></foreignObject></svg>
                          </li>
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="5.226666666666667rem" height="1.3866666666666667rem"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px"><p data-v-67a2f1ed="" class="badge-header" style="background-color: rgb(76, 175, 80); padding: 0.32rem; display: inline-block; font-size: 0.32rem; font-weight: bolder; letter-spacing: 0.05rem; text-align: center;">POWERED BY</p> <p data-v-67a2f1ed="" class="badge-tail" style="background-color: rgb(56, 142, 60); padding: 0.32rem; display: inline-block; font-size: 0.32rem; letter-spacing: 0.05rem; text-align: center;">vue</p></div></foreignObject></svg>
                          </li>
                      </ul>
                  </drawer>
                  <drawer icon-name="visibility" title-name="机器视觉技术栈">
                      <ul class="drawer-container">
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="6.293333333333333rem" height="1.3866666666666667rem"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px"><p data-v-67a2f1ed="" class="badge-header" style="background-color: rgb(121, 85, 72); padding: 0.32rem; display: inline-block; font-size: 0.32rem; font-weight: bolder; letter-spacing: 0.05rem; text-align: center;">POWERED BY</p> <p data-v-67a2f1ed="" class="badge-tail" style="background-color: rgb(93, 64, 55); padding: 0.32rem; display: inline-block; font-size: 0.32rem; letter-spacing: 0.05rem; text-align: center;">gans&amp;cv</p></div></foreignObject></svg>
                          </li>
                          <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="5.44rem" height="1.3866666666666667rem"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px"><p data-v-67a2f1ed="" class="badge-header" style="background-color: rgb(3, 169, 244); padding: 0.32rem; display: inline-block; font-size: 0.32rem; font-weight: bolder; letter-spacing: 0.05rem; text-align: center;">maked BY</p> <p data-v-67a2f1ed="" class="badge-tail" style="background-color: rgb(2, 136, 209); padding: 0.32rem; display: inline-block; font-size: 0.32rem; letter-spacing: 0.05rem; text-align: center;">python</p></div></foreignObject></svg>
                          </li>
                      </ul>
                  </drawer>
              </section>
          </sider-nav>
          <div class="blog-content pull-right">
              <div class="mutiltype-lister">
                  <nav class="selector paper">
                      <router-link class="selected-name" tag="div" to="/lp">
                          <span>项目</span>
                      </router-link>
                      <router-link class="selected-name" tag="div" to="/la">
                          <span>文章</span>
                      </router-link>
                      <!-- <a href="#" class="selected-name" v-bind:class="[selectedItem == 'projects' ? 'active' : '']" @click="select('projects')">项目</a> -->
                      <!-- <a href="#" class="selected-name" v-bind:class="[selectedItem == 'articles' ? 'active' : '']" @click="select('articles')">文章</a> -->
                  </nav>
                  <div class="container">
                      <keep-alive>
                          <router-view></router-view>
                      </keep-alive>
                  </div> 
                  <!-- <ul class="container">
                      
                      <li class="paper card" v-for="item in items">
                          <div class="card-img" @click="link(item.router)">
                              <img :src="item.src" :alt="item.id">
                              <div class="card-intro" :style="item.style">
                                  <p class="card-title">{{ item.title }}</p>
                                  <p class="card-time">{{ item.time }}</p>
                              </div>
                          </div>
                          <div class="card-content">
                              <p>{{ item.content }}</p>
                          </div>
                      </li>
                  </ul> -->
              </div>
          </div>
      </div>
      <div class="sider-cover" @click="slideOut"></div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import  Velocity from 'velocity-animate'
    import axios from "axios"
    
    import drawer from './UI/drawer'
    import SiderNav from "./UI/siderNav";
    export default {
        name: 'homepage', 
        data () {
            return {
                msg: 'Welcome to Your Vue.js App', 
                selectedItem: 'articles'
            }
        },
        components: {
            SiderNav,
            drawer
        },
        computed: {
            ...mapGetters({
                articleLists: 'get_articlelists', 
                projectLists: 'get_projectlists',
                articleLens: 'get_articlelens',
                projectLens: 'get_projectlens'
            }),
            items() {
                let renderContent = this.selectedItem == 'projects'? this.projectLists: this.articleLists;
                return renderContent
            }
        }, 
        methods: {
            select(type) {
                this.selectedItem = type
            }, 
            link(url) {
                this.$router.push({ path: url })
            },
            slideOut() {
                let siderNav = document.querySelector('.personal-siderbar'),
                    siderCover = document.querySelector('.sider-cover'),
                    homeMain = document.querySelector('body');
                siderCover.classList.remove('show');
                homeMain.classList.remove('hidden');
                Velocity(siderNav, {left: '-100%'}, {duration: 300, easing: "easeOutQuart"})
            }
        }
    }
</script>

