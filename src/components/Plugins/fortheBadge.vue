<style scoped>
    .forecast {
        font-family: 'Raleway', sans-serif;
        width: 40%;
        margin: 0 auto;
    }
    .badge-form .badge-header-select,
    .badge-form input {
        width: 33.3%;
        padding: 24px;
        box-sizing: border-box;
        float: left;
        text-align: center;
    }
    .badge-form .badge-header-select option {
        text-align: center;
    }
    .forthebadge {
        margin-top: 48px;
    }
    button {
        margin: 48px 0;
        padding: 12px 14px;
        background-color: white;
    }
    .badge-output {
        padding: 24px 48px;
        min-height: 240px;
    }
    .forthebadge-copyright {
        padding-top: 12px;
        text-align: left;
        font-size: 36px;
    }
    .badge-output img {
        width: auto;
        height: 100px!important;
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
            <div class="paper badge-output" v-html="svgData"></div>
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
                tailValue: 'LOVE',
                svgData: ''
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
                        'padding': '0.32rem', 
                        'display': 'inline-block',
                        'font-size': '0.32rem', 
                        'font-weight': 'bolder',
                        'letter-spacing': '0.05rem',
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
                        'padding': '0.32rem',
                        'display': 'inline-block',
                        'font-size': '0.32rem',
                        'letter-spacing': '0.05rem',
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
                let badgeWidth = ((badgeHeader.clientWidth + badgeTail.clientWidth + 20) / 75.0) * 2 + 'rem'
                    , badgeHeight = ((badgeHeader.clientHeight + 10) / 75.0) * 2 + 'rem';
                console.log(badgeWidth, badgeHeight)
                if (this.headerValue && this.tailValue) {
                    this.svgData += "<svg xmlns='http://www.w3.org/2000/svg' width=" + "'" + badgeWidth + "'" + " height=" + "'" + badgeHeight + "'" + ">" +
                        "<foreignObject width='100%' height='100%'>" +
                        "<div xmlns='http://www.w3.org/1999/xhtml' style='font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px'>" +
                        badge +
                        '</div>' +
                        '</foreignObject>' +
                        '</svg>'
                }
            }
        }
    }
</script>
