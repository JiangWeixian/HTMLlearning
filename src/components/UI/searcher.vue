<style scoped>
    .searcher {
        width: 100%;
        position: relative;
    }
    .searcher input {
        width: 100%;
        background-color: #f5f5f5;
        text-indent: 1rem;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.5rem;
        line-height: 3rem;
    }
    .searcher .search-icon {
        position: absolute;
        right: 0;
        top: 0;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        background-color: #f5f5f5;
        cursor: pointer;
    }
    .searcher i.focus {
        color: #0c72ee
    }
    .searcher .search-icon:hover{
        color: #0c72ee
    }
</style>

<template>
    <div id="SEARCHER" class="searcher">
        <input type="text" id="SEARCHCONTENT" v-model="searchContent" @blur="changeStatus(false)" @focus="changeStatus(true)" @keyup.enter="input">
        <i class="material-icons search-icon" :class="[inputStatus? 'focus' : '']" @click="input">search</i>
    </div>
</template>

<script>
    export default {
        name: "searcher",
        data() {
            return {
                searchContent: '',
                inputStatus: false
            }
        },
        methods: {
            input() {
                this.$emit('search', { searchContent: this.searchContent })
            },
            changeStatus(status) {
                this.inputStatus = status
            }
        }
    }
</script>
