<template>
  <div id="HOMEPAGE" class="home">
      <div class="home-main clearfix">
          <div class="personal-siderbar pull-left">
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
                      <li class="title"><p>发布的文章 </p><span>0</span></li>
                      <li class="title"><p>维护的项目 </p><span>0</span></li>
                  </ul>
              </section>
              <section class="stack-info">
                  <div class="drawer paper">
                      <div class="order title clearfix">
                          <p class="title-icon pull-left"><i class="material-icons lh-36">web</i></p>
                          <p class="title-name lh-36 pull-left">前端技术</p>
                          <p class="title-switch pull-right"><i class="material-icons lh-36">more_horiz</i></p>
                      </div>
                      <ul class="drawer-container">
                          <li><svg xmlns='http://www.w3.org/2000/svg' width='146' height='47'><foreignObject width='100%' height='100%'><div xmlns='http://www.w3.org/1999/xhtml' style='font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px'><p class="header" style="display: inline-block; padding: 0.6rem 1rem; font-size: 12px; letter-spacing: 3px; background-color: rgb(159, 168, 218);">skill</p> <p class="tail" style="display: inline-block; padding: 0.6rem 1rem; font-weight: 700; font-size: 12px; letter-spacing: 3px; background-color: rgb(63, 81, 181);">css</p></div></foreignObject></svg></li>
                          <li><svg xmlns='http://www.w3.org/2000/svg' width='146' height='47'><foreignObject width='100%' height='100%'><div xmlns='http://www.w3.org/1999/xhtml' style='font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px'><p class="header" style="display: inline-block; padding: 0.6rem 1rem; font-size: 12px; letter-spacing: 3px; background-color: rgb(159, 168, 218);">skill</p> <p class="tail" style="display: inline-block; padding: 0.6rem 1rem; font-weight: 700; font-size: 12px; letter-spacing: 3px; background-color: rgb(63, 81, 181);">css</p></div></foreignObject></svg></li>
                          <li><svg xmlns='http://www.w3.org/2000/svg' width='146' height='47'><foreignObject width='100%' height='100%'><div xmlns='http://www.w3.org/1999/xhtml' style='font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px'><p class="header" style="display: inline-block; padding: 0.6rem 1rem; font-size: 12px; letter-spacing: 3px; background-color: rgb(159, 168, 218);">skill</p> <p class="tail" style="display: inline-block; padding: 0.6rem 1rem; font-weight: 700; font-size: 12px; letter-spacing: 3px; background-color: rgb(63, 81, 181);">css</p></div></foreignObject></svg></li>
                          <li><svg xmlns='http://www.w3.org/2000/svg' width='146' height='47'><foreignObject width='100%' height='100%'><div xmlns='http://www.w3.org/1999/xhtml' style='font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px'><p class="header" style="display: inline-block; padding: 0.6rem 1rem; font-size: 12px; letter-spacing: 3px; background-color: rgb(159, 168, 218);">skill</p> <p class="tail" style="display: inline-block; padding: 0.6rem 1rem; font-weight: 700; font-size: 12px; letter-spacing: 3px; background-color: rgb(63, 81, 181);">css</p></div></foreignObject></svg></li>
                      </ul>
                      <div class="drawer-hander">
                          <i class="material-icons md-18">keyboard_arrow_up</i>
                      </div>
                  </div>
              </section>
          </div>
          <div class="blog-content pull-right">
              <div class="mutiltype-lister">
                  <nav class="selector paper">
                      <a href="#" class="selected-name" v-bind:class="[selectedItem == 'projects' ? 'active' : '']" @click="select('projects')">项目</a>
                      <a href="#" class="selected-name" v-bind:class="[selectedItem == 'articles' ? 'active' : '']" @click="select('articles')">文章</a>
                  </nav>
                  <ul class="container">
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
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'hello', 
        data () {
            return {
                msg: 'Welcome to Your Vue.js App', 
                selectedItem: 'articles'
            }
            }, 
        computed: {
            ...mapGetters({
               articleLists: 'get_articlelists',
               projectLists: 'get_projectlists' 
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
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        background-color: #f5f5f5;
        min-height: 100vw;
    }
    ul {
        list-style: none;
    }
    .lh-36 {
        line-height: 36px;
        height: 36px;
    }
    .md-18 {
        font-size: 18px;
    }
    .home-main {
        width: 65%;
        padding-top: 4.5rem;
        margin: 0 auto;
    }
    .personal-siderbar {
        width: 29%;
    }
    .personal-info {
        margin-top: 1rem;
    }
    .personal-info .personal-bg img {
        width: 100%;
        object-fit: cover;
    }
    .personal-info .personal-content {
        text-align: left;
        position: relative;
        padding-bottom: 1rem;
    }
    .personal-info .personal-content img {
        position: absolute;
        left: 2rem;
        top: -5rem;
        width: 8rem;
        height: 8rem;
        border-radius: 5rem;
        border: 3px solid white;
        object-fit: cover;
    }
    .personal-info .personal-content > * {
        text-indent: 3rem;
        font-family: 'Noto Sans', sans-serif;
    }
    .personal-info .personal-content h1 {
        padding-top: 5rem;
    }
    .homepage-info {
        font-family: 'Noto Sans', sans-serif;
        text-align: justify;
    }
    .homepage-info li:hover {
        background-color: #f5f5f5;
    }
    .homepage-info li p, .homepage-info li span {
        width: 47%;
        display: inline-block;
        line-height: 3rem;
        font-size: 1.5rem;
    }
    .homepage-info li p {
        text-align: left;
        text-indent: 1rem;
    }
    .homepage-info li span {
        text-align: right;
    }
    
    
    .blog-content {
        width: 68%;
    }
</style>
