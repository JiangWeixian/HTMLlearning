<template>
    <div class="list articles">
            <li class="paper card" 
                v-for="item in articleLists" 
                :key="item.id">
                <a class="card-img" :href="item.router">
                    <img :src="item.src" :alt="item.id">
                    <div class="card-intro" :style="item.style">
                        <p class="card-title">{{ item.title }}</p>
                        <p class="card-time">{{ item.time }}</p>
                    </div>
                </a>
                <div class="card-content">
                    <p>{{ item.content }}</p>
                </div>
            </li>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'ListArticles',
        computed: {
            ...mapGetters({
                articleLists: 'get_articlelists', 
                articleLens: 'get_articlelens'
            })
        }
    }
</script>

<style scoped>

</style>
