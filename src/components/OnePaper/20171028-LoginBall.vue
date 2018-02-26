<template>
  <div id="LOGINBALL">
    <div class="loginball-bg">
      <canvas id="LOGINBALL-ANI" v-on:click="down()" ></canvas>
      <div class="loginball-panel" id="LOGINPANEL" v-on:click="alert()">
        <p class="paneltitle">Create Accounts</p>
        <div class="panelform">
          <div class="panelinput">
            <p>email</p>
            <input type="text" placeholder="email">
          </div>
          <div class="panelinput">
            <p>password</p>
            <input type="password" placeholder="password">
          </div>
          <div class="panelform-submit">
            <button>Register</button>
            <p>or login with <a href="#">Google accounts</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loginball',
    data () {
      return {
        name: 'loginball',
        focus: true
      }
    },
    methods: {
      alert: function () {
        let panel = document.querySelector('#LOGINPANEL')
        Velocity(panel, {boxShadowBlur: '10px', boxShadowSpread: '2px'}, {duration: 100, easing: "easeInSine"})
      },
      down: function () {
        let panel = document.querySelector('#LOGINPANEL')
        Velocity(panel, {boxShadowBlur: '0px', boxShadowSpread: '0px'}, {duration: 100, easing: "easeInSine"})
      }
    },
    mounted() {
      let canvas = document.querySelector('#LOGINBALL-ANI'),
        context = canvas.getContext("2d"),
        maxWidth = document.body.clientWidth,
        maxHeight = document.body.clientHeight,
        circle = 50,
        num = 5,
        balls = [],
        colors = ["#6472EF", "#F8455F", "#F8C734"]

      canvas.width = maxWidth
      canvas.height = maxHeight

      function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      }

      function distance(x, y) {
        return Math.sqrt(Math.pow(x, 2)+Math.pow(y,2))
      }

      function Ball() {
        this.overx = true
        this.overy = true
        this.r = random(10, 30)
        this.mouseR = 50
        this.ballColor = { color: colors[Math.floor(Math.random() * colors.length)] }
        this.coorx = random(30, maxWidth - 30)
        this.coory = random(30, maxHeight - 30)
        this.vx = 5
        this.vy = 5
        this.ax = 0.98
        this.ay = 0.98
      }
      Ball.prototype.moveBall = function () {
        context.beginPath()
        this.vx *= this.ax
        this.coorx += this.vx
        if (this.coorx >= maxWidth - this.r || this.coorx <= this.r) {
          this.vx = -this.vx
        }
        this.vy *= this.ay
        this.coory += this.vy
        if (this.coory >= maxHeight - this.r || this.coory <= this.r) {
          this.vy = -this.vy
        }
        this.coory += this.vy

        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur = 15;
        context.shadowColor = 'rgba(0, 0, 0, 0.3)';
        context.fillStyle = this.ballColor.color
        context.arc(this.coorx, this.coory, this.r, 0, Math.PI * 2, false)
        context.fill()
      }
      Ball.prototype.setSpeedXY = function (msx, msy) {
        let dx = this.coorx - msx,
          dy = this.coory - msy,
          ax = 0,
          ay = 0,
          ball2ms = distance(dx, dy)

        if (Math.abs(dx) > 5) {
          ax = dx > 0? 2:-2
        }
        if (Math.abs(dy) > 5) {
          ay = dy > 0? 2:-2
        }

        if (ball2ms < circle) {
          let vec = [ax, ay]
          this.vx += vec[0]*(this.r/10.0)
          this.vy += vec[1]*(this.r/10.0)
        }
      }

      for (let i = 0; i < num; i++) {
        balls[i] = new Ball()
      }

      document.onmousemove = function (event) {
        let msevent = event || window.event
        for (let j = 0; j < num; j++) {
          balls[j].setSpeedXY(msevent.clientX, msevent.clientY)
        }
      }

      setInterval(function () {
        context.clearRect(0, 0, maxWidth, maxHeight)
        for (let j = 0; j < num; j++) {
          balls[j].moveBall()
        }
      }, 30)
    }
  }
</script>

<style scoped>
  .loginball-bg {
    height: 100vh;
    overflow: hidden;
    background-color: #2B2D5C;
    position: relative;
  }
  .loginball-panel {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -17em;
    margin-left: -25em;
    padding-bottom: 2em;
    width: 50em;
    border-radius: 1em;
    background-color: #2B2D5C;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
  }
  .loginball-panel .panelform{
    width: 90%;
    margin: 0 auto;
    text-align: left;
  }
  .panelform div{
    width: 100%;
  }
  .paneltitle {
    padding-top: 1em;
    color: white;
    font-size: 4em;
    font-weight: bolder;
  }
  .panelinput {
    margin-top: 3em;
  }
  .panelinput p {
    text-transform: uppercase;
    color: #7B7EBA;
    font-weight: bold;
  }
  .panelinput input {
    margin-top: 0.5em;
    padding: 1em 1em;
    width: 100%;
    box-sizing: border-box;
    background-color: #23234F;
    color: white;
    border-radius: 0.5em;
  }
  .panelinput input::placeholder {
    color: #2B2D5C;
  }
  .panelform-submit {
    text-align: center;
    padding-top: 2em;
  }
  .panelform-submit button {
    background-color: #2B2D5C;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 2em;
    padding: 1em 2em;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  }
  .panelform-submit p {
    padding-top: 1em;
  }
  .panelform-submit p a {
    color: white;
  }
</style>
