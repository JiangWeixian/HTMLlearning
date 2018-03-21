<style scoped>
    .page-container {
        background-color: #f5f5f5;
    }
    .notfound-wrapper {
        font-family: 'Raleway', sans-serif;
        
    }
    .notfound-card {
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        margin-top: -300px;
        text-align: center;
    }
    .notfound-card p {
        color: #4b1d27;
        font-size: 250px;
        font-weight: bolder;
    }
    button {
        margin-top: 48px;
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
