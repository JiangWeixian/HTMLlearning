<template>
  <div id="BADGEIMG" class="badgeimg">
      <div id="BADGE-INPUT" class="badge-input">
      <select class="badge-header-select" v-model="selectHeader">
        <option disable value="">PLEASE CHOOSE ONE TYPE</option>
        <option value="AGES">AGES</option>
        <option value="APPROVED">APPROVED</option>
        <option value="AS SEEN">AS SEEN</option>
        <option value="BUILT BY">BUILT BY</option>
        <option value="BUILT WITH">BUILT WITH</option>
        <option value="BUILT FOR">BUILT FOR</option>
        <option value="CREATIVE COMMONS">CREATIVE COMMONS</option>
        <option value="CERTIFIED BY">CERTIFIED BY</option>
        <option value="CHECK">CHECK</option>
        <option value="COMPATIBILITY">COMPATIBILITY</option>
        <option value="CONTAINS">CONTAINS</option>
        <option value="DESIGNED IN">DESIGNED IN</option>
        <option value="DOES NOT CONTAIN">DOES NOT CONTAIN</option>
        <option value="MADE WITH">MADE WITH</option>
        <option value="POWERED BY">POWERED BY</option>
        <option value="USES">USES</option>
      </select>
      <input type="text" name="badge-header-input" value="" v-model="inputHeader">
      <input type="text" name="badge-tail-input" value="" v-model="tail">
    </div>
      <div id="BADGE" style="font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase;">
      <p class="header" :style="style.headerStyle">{{ selectHeader || inputHeader}}</p>
      <p class="tail" :style="style.tailStyle">{{ tail }}</p>
    </div>
      <button v-on:click="convert()">CONVERT</button>
      <div class="badge-output">
          <h2>Output Image:</h2>
      </div>
  </div>
</template>

<script>
  import * as color from '../assets/js/color'
  export default {
    name: 'Div2Img',
    data() {
      return {
        inputHeader: ' ',
        tail: ' ',
        selectHeader: ' ',
        defaultColorMap: {
          'AGES': 'blue',
          'AS SEEN': 'pink',
          'APPROVED': 'cyan',
          'BUILT BY': 'purple',
          'BUILT WITH': 'lime',
          'BUILT FOR': 'teal',
          'CREATIVE COMMONS': 'amber',
          'CERTIFIED BY': 'lightGreen',
          'DESIGNED IN': 'blueGrey',
          'CHECK': 'orange',
          'COMPATIBILITY': 'brown',
          'CONTAINS': 'deepOrange',
          'MADE WITH': 'red',
          'POWERED BY': 'lightBlue',
          'USES': 'green'
        },
        headerStyleTemplate: "display:inline-block; padding: 0.6rem 1rem; font-size: 12px; letter-spacing: 3px; ",
        tailStyleTemplate: "display:inline-block; padding: 0.6rem 1rem; font-weight: 700; font-size: 12px; letter-spacing: 3px;"
      }
    },
    computed: {
        style() {
          var tailColor, headerColor, headerStyle, tailStyle
          var headerColorMap = ['100', '200', '300', '400']
          if (this.selectHeader) {
            var tailColorName = this.defaultColorMap[this.selectHeader]
            tailColor = color[tailColorName]
            var index = Math.floor(Math.random() * headerColorMap.length)
            var headerColorName = tailColorName + headerColorMap[index]
            headerColor = color[headerColorName]
          }
          else {
            var index = Math.floor(Math.random() * color.mainColor.length)
            var tailColorName = color.mainColor[index]
            tailColor = color[tailColorName]
            var index = Math.floor(Math.random() * headerColorMap.length)
            var headerColorName = tailColorName + headerColorMap[index]
            headerColor = color[headerColorName]
          }
          headerStyle = this.headerStyleTemplate + "background-color: " + headerColor
          tailStyle = this.tailStyleTemplate + "background-color: " + tailColor
          return {
            'headerStyle': headerStyle,
            'tailStyle': tailStyle
          }
        }
      },
    methods: {
      convert() {
        var divContent = document.getElementById('BADGE').innerHTML
        var header = document.querySelector('.header')
        , tail = document.querySelector('.tail')
        var headerContent = this.selectHeader || this.inputHeader
        , tailContent = this.tail
        console.log(tail.clientWidth)
        console.log(header.clientWidth)
        var badgeWidth = header.clientWidth + tail.clientWidth + 20
        , badgeHeight = header.clientHeight + 15
        console.log(badgeWidth)
        if (headerContent && tailContent) {
          var data = 'data:image/svg+xml,' +
            "<svg xmlns='http://www.w3.org/2000/svg' width=" + "'" + badgeWidth + "'" + " height=" + "'" +badgeHeight + "'" + ">" +
            "<foreignObject width='100%' height='100%'>" +
            "<div xmlns='http://www.w3.org/1999/xhtml' style='font-family: Raleway; font-size: 0px; color: white; text-transform: uppercase; padding: 0px'>" +
            divContent +
            '</div>' +
            '</foreignObject>' +
            '</svg>'
          var img = new Image()
          img.src = data
          document.querySelector('.badge-output').appendChild(img)
        }
      }
    }
  }

</script>

<style>
    .badgeimg {
        padding-top: 5rem;
        min-height: 100vh;
    }
    .badge-input {
    margin-bottom: 1rem;
    }
    
    .badge-input input {
    border: 1px solid black;
    }
    
    .header {
    background-color: #ef5350;
    ;
    }
    
    .tail {
    background-color: #f44336;
    }
    
    button {
    margin-top: 1rem;
    }
</style>
