<style scoped>
    .page-container {
        background-color: #f5f5f5;
    }
    .notfound-wrapper {
        padding-top: 20rem;
        font-family: 'Raleway', sans-serif;
        color: #ccc;
    }
    .notfound-card {
        width: 30%;
        margin: 0 auto;
        padding: 1rem 0rem 2rem 0rem;
    }
    .notfound-card p:nth-child(1) {
        color: #4b1d27;
        font-size: 15rem;
        font-weight: bolder;
        line-height: 10rem;
    }
    button {
        margin-top: 5rem;
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
