<template>
    <div id="BEGINWITHDOGS" class="dogs-year">
        <div class="dogs-bg"></div>
        <div class="dogs-content">
            <p class="content-title">Fall-Out</p>
            <p class="content-words">开局，一条狗</p>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "dogs",
        data () {
            return {
                name: 'beginWithdogs'
            }
        }
    }
</script>

<style scoped>
    .dogs-bg, .dogs-content {
        position: absolute;
        left: 0;
        top: 0;
    }
    .dogs-bg {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: url("https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/begin-with-dogs-bg.jpg");
        background-size: cover;
        background-position-y: center;
        background-position-x: 60px;
    }
    .dogs-content {
        text-align: left;
        width: 1200px;
        left: 50%;
        margin-left: -650px;
        top: 1000px;
        z-index: 999;
    }
    .dogs-content, p.content-title {
        font-family: 'Roboto', sans-serif;
        font-size: 48px;
        font-weight: lighter;
        position: relative;
    }
    .dogs-content .content-title::after {
        content: ' ';
        display: block;
        width: 156px;
        height: 2px;
        position: absolute;
        top: 100%;
        left: 2px;
        background-color: black;
    }
    .dogs-content .content-words {
        font-size: 200px;
        font-weight: bolder;
        font-family: 'Noto Sans', sans-serif;
        position: relative;
        z-index: 999;
        left: 0;
        top: 0;
    }
    @keyframes belong {
        from {width: 0px}
        to {width: 1200px}
    }
    .dogs-content .content-words::after {
        content: ' ';
        display: block;
        width: 1200px;
        height: 60px;
        position: absolute;
        z-index: -1;
        top: 65%;
        left: 2px;
        background-color: red;
        animation: belong 1s ease-out;
    }
</style>
