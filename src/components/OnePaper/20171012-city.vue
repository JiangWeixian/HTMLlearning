<template>
  <div id="CITY">
    <div class="city-bg">
      <div class="city-name">
        <span>SHANGHAI</span>
      </div>
      <i class="material-icons" v-on:click="info" id="CITYPLACE">place</i>
      <div class="city-info" id="CITYINFO">
        <ul>
          <li>COUNTRY<p>China</p></li>
          <li>DISTRICT<p>32</p></li>
          <li>POPULATION<p>8538689</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import  Velocity from 'velocity-animate'
  export default {
    name: 'city',
    data() {
      return {
        click: false
      }
    },
    methods: {
      info: function (event) {
        let info = document.querySelector('#CITYINFO'),
          button = document.querySelector('#CITYPLACE')
        const time = 200
        if (!this.click) {
          Velocity(info, {marginTop: '74vh'}, {duration: time, easing: "easeInSine"})
          Velocity(button, {top: '64vh'}, {duration: time, easing: "easeInSine"})
          this.click = true
        }
        else {
          Velocity(info, {marginTop: '100vh'}, {duration: time, easing: "easeInSine"})
          Velocity(button, {top: '90vh'}, {duration: time, easing: "easeInSine"})
          this.click = false
        }
      }
    }
  }
</script>

<style scoped>
  html{
    font-size: 62.5%;
    width: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }
  .city-bg {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url("../../assets/img/20171012.jpg");
    background-size: cover;
    position: relative;
  }
  .city-name {
    width: 45rem;
    border: 1rem white solid;
    position: absolute;
    padding: 0.5rem 2rem;
    top: 50%;
    left: 50%;
    margin-top: -10rem;
    margin-left: -22.5rem;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
  }
  .city-name span {
    color: white;
    font-size: 8rem;
    font-weight: bolder;
  }
  .city-name::after {
    content: '';
    width: 60rem;
    height: 30rem;
    background-image: url('/static/img/20171012.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: -1rem;
    left: -1rem;
    z-index: -1;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -ms-filter: blur(15px);
    -o-filter: blur(15px);
    filter: blur(15px);
  }
  .city-bg .material-icons {
    cursor: pointer;
    color: white;
    font-size: 4rem;
    position: absolute;
    left: 50%;
    top: 90vh;
    margin-left: -2rem;
    animation: float 2s ease-in-out infinite;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  .city-info {
    width: 98%;
    background-color: white;
    padding-top: 6rem;
    padding-bottom: 6rem;
    margin: 0 auto;
    margin-top: 100vh;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 2px black;
    font-size: 0px;
  }
  .city-info ul li{
    display: inline-block;
    color: #ccc;
    font-size: 4rem;
    font-weight: lighter;
    position: relative;
    width: 33.3%;
  }
  .city-info ul li::after{
    content: '';
    width: 1px;
    height: 50px;
    position: absolute;
    z-index: 1000;
    top: 30px;
    left: 100%;
    background-color: #ccc;
  }
  .city-info ul li p {
    color: black;
    font-weight: 600;
  }


</style>
