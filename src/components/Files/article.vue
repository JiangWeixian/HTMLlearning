<template>
    <div id="ARTICLE" class="article">
        <div class="article-bg"></div>
        <article id="CONTENT" class="article-content paper" v-html="markedContent"></article>
    </div>
</template>

<script>
    import marked from 'marked'
    import { mapGetters } from 'vuex'
    export default {
        name: "article",
        data() {
            return {
                name: 'article'
            }
        },
        props: {
            id: String
        },
        computed: {
            content() {
                let articleData = this.$store.getters.currentArticle(this.id);
                if (articleData) {
                    return articleData
                }
                else {
                    this.$router.push({ path: '/not_found' })
                }
            },
            markedContent() {
                return marked(this.content.markdownData)
            }
        }
    }
</script>

<style scoped>
    .article {
        position: relative;
        background-color: #f5f5f5;
        padding: 60px 0 48px 0;
    }
    .article-content {
        width: 60%;
        box-sizing: border-box;
        padding: 24px 48px;
        margin: 0 auto;
        margin-top: -300px;
    }
    .article-bg {
        background-color: white;
        width: 100%;
        height: 400px;
    }
    
    @media screen and (max-width: 1024px) {
        .article-content {
            width: 80%;
        }
    }
    @media screen and (max-width: 750px) {
        .article-content {
            width: 95%;
        }
    }
</style>
