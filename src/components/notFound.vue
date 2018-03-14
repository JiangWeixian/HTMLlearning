<style scoped>
    .page-container {
        background-color: #f5f5f5;
    }
    .notfound-wrapper {
        font-family: 'Raleway', sans-serif;
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        margin-top: -15rem;
    }
    .notfound-card {
        margin: 0 auto;
        text-align: center;
    }
    .notfound-card p {
        color: #4b1d27;
        font-size: 15rem;
        font-weight: bolder;
    }
    button {
        margin-top: 2rem;
        background-color: white;
    }
    button:active {
        background-color: #ccc;
    }
</style>

<template>
    <div id="NOTFOUND" class="notfound page-container">
        <div class="notfound-wrapper">
            <div class="notfound-card">
                <p>404</p>
                <button @click="back">BACK</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "not-found",
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>
