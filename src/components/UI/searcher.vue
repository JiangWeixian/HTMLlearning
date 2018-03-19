<style scoped>
    .searcher {
        width: 100%;
        position: relative;
    }
    .searcher input {
        width: 100%;
        background-color: #f5f5f5;
        text-indent: 12px;
        font-family: 'Noto Sans', sans-serif;
        font-size: 14px;
        line-height: inherit;
    }
    .searcher .search-icon {
        position: absolute;
        right: 0;
        top: 0;
        width: 36px;
        height: 36px;
        line-height: inherit;
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
        computed: {
            isPc() {
                var ua = navigator.userAgent,
                    isWindowsPhone = /(?:Windows Phone)/.test(ua),
                    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
                    isAndroid = /(?:Android)/.test(ua),
                    isFireFox = /(?:Firefox)/.test(ua),
                    isChrome = /(?:Chrome|CriOS)/.test(ua),
                    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
                    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
                    isPc = !isPhone && !isAndroid && !isSymbian;
                return isPc
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
