<template>
  <div class="list projects">
        <li class="paper card" 
            v-for="item in projectLists" 
            :key="item.id">
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
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'ListProjects',
        data() {
            return {
                name: 'ListProjects'
            }
        },
        computed: {
            ...mapGetters({
                projectLists: 'get_projectlists',
                articleLens: 'get_articlelens'
            })
        }, 
        methods: {
            link(url) {
                this.$router.push({ path: url })
            }
        }
    }
</script>

<style scoped>

</style>