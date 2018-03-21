<template>
  <div id="SHARE">
    <div class="shareCard-bg">
      <div class="shareCard-slider">
        <ul id="SHARELIST" class="shareCard-list">
          <li class="list-info">
            <img src="../../assets/img/avatar.jpg" alt="avatar">
            <p>Lor0px ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi dolores id in mollitia officiis, quae quisquam voluptatum. At dolor facere iusto laudantium quisquam reprehenderit sequi? Accusamus ad commodi laudantium!</p>
            <button>SHARE IT!</button>
          </li>
          <li class="list-info">
            <img src="../../assets/img/avatar.jpg" alt="avatar">
            <p>Lor0px ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet asperiores at eligendi esse fugit illum, inventore libero magni nam nesciunt officia officiis, quod repudiandae sint tenetur ut vero voluptatibus?</p>
            <button>SHARE IT!</button>
          </li>
          <li class="list-info">
            <img src="../../assets/img/avatar.jpg" alt="avatar">
            <p>Lor0px ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi consequatur hic magnam non, quid0px quis quisquam quos repudiandae sit t0pxpore totam voluptate. Aut0px consectetur, dolor eveniet impedit natus quo!</p>
            <button>SHARE IT!</button>
          </li>
          <li class="list-info">
            <img src="../../assets/img/avatar.jpg" alt="avatar">
            <p>Lor0px ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio expedita nulla obcaecati ullam. Aspernatur consectetur eum explicabo maiores molestias quasi quod repellendus. Doloribus explicabo magnam magni neque nulla, recusandae.</p>
            <button>SHARE IT!</button>
          </li>
          <li class="list-info">
            <img src="../../assets/img/avatar.jpg" alt="avatar">
            <p>Lor0px ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut culpa dignissimos dolor0pxque ea et impedit itaque libero minima natus numquam pariatur quae, quisquam sapiente, sequi t0pxpora ullam veritatis voluptate!</p>
            <button>SHARE IT!</button>
          </li>
          <li class="list-info">
            <img src="../../assets/img/avatar.jpg" alt="avatar">
            <p>Lor0px ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda consequuntur dolorum ea esse explicabo facere fugiat itaque necessitatibus n0pxo odit qui quid0px, quis ullam unde! Aliquid debitis t0pxporibus voluptat0px!</p>
            <button>SHARE IT!</button>
          </li>
        </ul>
        <div class="shareCard-button clearfix">
          <button class="prev" v-on:click="prev"><i class="material-icons">arrow_back</i></button>
          <button class="next" v-on:click="next"><i class="material-icons">arrow_forward</i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  Velocity from 'velocity-animate'
  export default {
    name: 'shareCard',
    data() {
      return {
        name: 'shareCard',
        marginTop: 0,
        scale: 100,
        start: 0,
        end: 0,
        length: 6,
        max: 2,
        duration: 200,
        move: false
      }
    },
    methods: {
      next: function (event) {
        let shareList = document.querySelector('#SHARELIST'),
          shareCards = document.querySelectorAll('#SHARELIST li'),
          direction = -1
        this.start ++
        this.start = this.start >=(this.length - 1)? (this.length - 1):this.start
        this.end = this.start + this.max
        this.end = this.end >=(this.length - 1)? (this.length - 1):this.end
        this.marginTop = direction * this.start
        Velocity(shareList, {marginTop: this.marginTop + '0px'}, {duration: this.duration, easing: "easeInSine"})
        Velocity(shareCards[this.start - 1], {opacity: 0}, {duration: this.duration, easing: "easeInSine"})
        for (let start = this.start, count = 0; start <= this.end; start++, count++) {
          console.log(start, this.end)
          Velocity(shareCards[start], {opacity: 1, width: (this.scale - 10*count) + '%'}, {duration: this.duration, easing: "easeInSine"})
        }
      },
      prev: function (event) {
        let shareList = document.querySelector('#SHARELIST'),
          shareCards = document.querySelectorAll('#SHARELIST li'),
          direction = -1
        this.start --
        this.start = this.start <=0? 0:this.start
        this.end = this.start + this.max
        this.end = this.end >=(this.length - 1)? (this.length - 1):this.end
        this.marginTop = direction * this.start
        Velocity(shareList, {marginTop: this.marginTop + '0px'}, {duration: this.duration, easing: "easeInSine"})
        for (let start = this.end, count = (this.end - this.start); start >= this.start; start --, count--) {
          console.log(start, this.end)
          Velocity(shareCards[start], {opacity: 1, width: (this.scale - 10*count) + '%'}, {duration: this.duration, easing: "easeInSine"})
        }
        if (this.end + 1 <= (this.length - 1)) {
          Velocity(shareCards[this.end + 1], {opacity: 0, width: (this.scale - 10*(this.end - this.start + 1)) + '%'}, {duration: this.duration, easing: "easeInSine"})
        }
      }
    }
  }
</script>

<style scoped>
  #SHARE {
    font-family: 'Raleway', sans-serif;
  }
  .shareCard-bg {
    width: 100vw;
    height:100vh;
    overflow: hidden;
    background: linear-gradient(to bottom left, #B0F2FE 5%, #2789EA);
  }
  .shareCard-slider {
    width: 25%;
    height: 70%;
    position: relative;
    margin: 0 auto;
    top: 50%;
    margin-top: -240px;
    border: 1px solid rgba(255,255,255,0);
  }
  .shareCard-list {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .shareCard-list li {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 2px rgba(71, 160, 240, 0.2);
    opacity: 0;
  }
  .shareCard-list li:nth-child(1) {
    width: 100%;
    margin: auto;
    margin-top: 0px;
    z-index: 10;
    opacity: 1;
  }
  .shareCard-list li:nth-child(2) {
    width: 90%;
    margin: auto;
    margin-top: 10px;
    z-index: 9;
    opacity: 1;
  }
  .shareCard-list li:nth-child(3) {
    width: 80%;
    margin: auto;
    margin-top: 20px;
    z-index: 8;
    opacity: 1;
  }
  .shareCard-list li:nth-child(4) {
    width: 80%;
    margin: auto;
    margin-top: 30px;
    z-index: 7;
  }
  .shareCard-list li:nth-child(5) {
    width: 80%;
    margin: auto;
    margin-top: 40px;
    z-index: 6;
  }
  .shareCard-list li:nth-child(6) {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    z-index: 5;
  }
  .shareCard-list li img {
    width: 80px;
    height: 80px;
    margin-top: 40%;
    border-radius: 40px;
    object-fit: cover;
  }
  .shareCard-list li p {
    margin: 0 auto;
    margin-top: 10%;
    margin-bottom: 10%;
    width: 80%;
    text-align: center;
    word-break: keep-all;
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
  }
  .shareCard-list li button {
    background-color: #47a0f0;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px rgba(71, 160, 240, 0.2);
    cursor: pointer;
    color: white;
    font-weight: bolder;
    padding: 10px 40px;
  }
  .shareCard-button {
    position: absolute;
    width: 100%;
    height: 10%;
    top: 720px;
    left: 0;
  }
  .shareCard-button button {
    background: none;
    border: 4px solid rgba(255, 255, 255, 0.6);
    padding: 1px 0;
    cursor: pointer;
  }
  .shareCard-button button.prev {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    float: left;
    margin-left: -40px;
  }
  .shareCard-button button.next {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    float: right;
    margin-right: -40px;
  }
  .shareCard-button i {
    color: rgba(255, 255, 255, 0.6);
  }
</style>


