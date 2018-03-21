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
          Velocity(info, {marginTop: '78vh'}, {duration: time, easing: "easeInSine"})
          Velocity(button, {top: '68vh'}, {duration: time, easing: "easeInSine"})
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
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .city-bg {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url("https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/cityinfo-bg.jpg");
    background-size: cover;
    position: relative;
  }
  .city-name {
    width: 540px;
    font-family: Raleway, sans-serif;   
    border: 12px white solid;
    position: absolute;
    padding: 6px 24px;
    top: 50%;
    left: 50%;
    margin-top: -120px;
    margin-left: -270px;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
  }
  .city-name span {
    color: white;
    font-size: 80px;
    font-weight: bolder;
  }
  .city-name::after {
    content: '';
    width: 720px;
    height: 360px;
    background-image: url("https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/onepaper/cityinfo-bg.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: -12px;
    left: -12px;
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
    font-size: 48px;
    position: absolute;
    left: 50%;
    top: 90vh;
    margin-left: -24px;
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
    width: 100%;
    background-color: white;
    padding-top: 72px;
    padding-bottom: 72px;
    margin: 0 auto;
    margin-top: 100vh;
    box-shadow: 2px 2px 10px 2px black;
    font-size: 0px;
  }
  .city-info ul li{
    display: inline-block;
    color: #ccc;
    font-size: 96px;
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
  @media screen and (max-width: 750px) {
      .city-info {
          padding-top: 48px;
      }
      .city-info ul li {
         font-size: 28px; 
      }
  }  
</style>
