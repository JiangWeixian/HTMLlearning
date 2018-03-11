<style scoped>
    .forecast {
        font-family: 'Raleway', sans-serif;
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
        margin-top: 2rem;
    }
    button {
        margin: 2rem 0;
        padding: 0.5rem 0.7rem;
        background-color: #f5f5f5;
    }
    .badge-output {
        padding: 1rem 2rem;
        min-height: 40rem;
    }
    .forthebadge-copyright {
        padding-top: 0.5rem;
        text-align: left;
        font-size: 1.5rem;
    }
</style>

<template>
    <div id="FORTHBADGE" class="forecast">
        <div class="page-container">
            <div class="badge-form paper clearfix">
                <select class="badge-header-select" v-model="selectedColor">
                    <option :value="item.value" :style="'background-color:' + item.color " v-for="item in colorKeys">{{ item.value }}</option>
                </select>
                <input type="text" name="badge-header-input" value="" v-model="headerValue">
                <input type="text" name="badge-tail-input" value="" v-model="tailValue">
            </div>
            <div class="forthebadge" style="font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase;">
                <p class="badge-header" :style="headerStyle">{{ headerValue }}</p>
                <p class="badge-tail" :style="tailStyle">{{ tailValue }}</p>
            </div>
            <button @click="convert()">CONVERT</button>
            <div class="paper badge-output"></div>
            <p class="forthebadge-copyright">
                Inspired by this <a href="http://forthebadge.com">forthebadge</a>
            </p>
        </div>
        </div>
</template>

<script>
    import color from '../../assets/js/colorMap'
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
            headerStyle() {
                let headerColor = color[this.selectedColor][this.selectedColor + '500'],
                    style = {'background-color': headerColor, 
                        'padding': '1rem', 
                        'display': 'inline-block',
                        'font-size': '1rem', 
                        'font-weight': 'bolder',
                        'letter-spacing': '2px',
                        'text-align': 'center'};
                let str = ''
                Object.keys(style).map(value => {
                    str += value + ':' + style[value]+';'
                })
                return str
                        
            },
            tailStyle() {
                let tailColor = color[this.selectedColor][this.selectedColor + '700'],
                    style = {'background-color': tailColor,
                        'padding': '1rem',
                        'display': 'inline-block',
                        'font-size': '1rem',
                        'letter-spacing': '2px',
                        'text-align': 'center'};
                let str = '';
                Object.keys(style).map(value => {
                    str += value + ':' + style[value]+';'
                });
                return str
            }
        },
        methods: {
            convert() {
                let badge = document.querySelector('.forthebadge').innerHTML;
                let badgeHeader = document.querySelector('.badge-header')
                    , badgeTail = document.querySelector('.badge-tail');
                let badgeWidth = badgeHeader.clientWidth + badgeTail.clientWidth + 100
                    , badgeHeight = badgeHeader.clientHeight + 30;
                console.log(badgeWidth, badgeHeight)
                if (this.headerValue && this.tailValue) {
                    let data = 'data:image/svg+xml,' +
                        "<svg xmlns='http://www.w3.org/2000/svg' width=" + "'" + badgeWidth + "'" + " height=" + "'" + badgeHeight + "'" + ">" +
                        "<foreignObject width='100%' height='100%'>" +
                        "<div xmlns='http://www.w3.org/1999/xhtml' style='font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px'>" +
                        badge +
                        '</div>' +
                        '</foreignObject>' +
                        '</svg>';
                    let img = new Image();
                    img.src = data;
                    document.querySelector('.badge-output').appendChild(img)
                }
            }
        }
    }
</script>
