<style scoped>
    .forecast {
        font-family: 'Raleway', sans-serif;
    }
    .badge-form {
        width: 40%;
        margin: 0 auto;
    }
    .badge-form .badge-header-select,
    .badge-form input {
        width: 33.3%;
        padding: 1rem;
        box-sizing: border-box;
        float: left;
        text-align: center;
    }
    .badge-form .badge-header-select option {
        text-align: center;
    }
    .forthebadge {
        width: auto;
        font-size: 0;
        color: white;
        margin: 2rem auto;
    }
    .forthebadge p {
        padding: 1rem;
        display: inline-block;
        font-size: 1.5rem;
        letter-spacing: 2px;
        text-align: center;
    }
    .forthebadge p.badge-header {
        background-color: #f44336;
        font-weight: bolder;
    }
    .forthebadge p.badge-tail {
        background-color: #d32f2f;
    }
</style>

<template>
    <div id="FORTHBADGE" class="forecast page-container">
        <div class="badge-form paper clearfix">
            <select class="badge-header-select" v-model="selectedColor">
                <option :value="item.value" :style="'background-color:' + item.color " v-for="item in colorKeys">{{ item.value }}</option>
            </select>
            <input type="text" name="badge-header-input" value="" v-model="headerValue">
            <input type="text" name="badge-tail-input" value="" v-model="tailValue">
        </div>
        <div class="forthebadge">
            <div class="wrapper">
                <p class="badge-header">{{ headerValue }}</p>
                <p class="badge-tail">{{ tailValue }}</p>
            </div>
        </div>
        <button @click="convert()">CONVERT</button>
    </div>
</template>

<script>
    import color from '../assets/js/colorMap'
    export default {
        name: "forthe-badge",
        data() {
            return {
                selectedColor: 'red',
                headerValue: 'POWERED BY',
                tailValue: 'LOVE'
            }
        },
        computed: {
            colorKeys() {
                return Object.keys(color).map(value => {
                    return { value: value, color: color[value][value+'500'] }
                })
            },
            headColor() {
                return color[this.headerValue][this.headerValue + '700']
            },
            tailColor() {
                return color[this.tailValue][this.tailValue + '700']
            }
        },
        methods: {
            convert() {
                let tmp = Object.keys(color).map(value => {
                    return { value: value, color: color[value][value+'50'] }
                })
                console.log(tmp)
                // console.log(Object.keys(color))
            }
        }
    }
</script>
