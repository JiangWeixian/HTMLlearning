<template>
  <div id="WEATHER">
    <img src="http://api.dujin.org/bing/1920.php" alt="bing" class="weather-bg">
    <ul class="weather-head">
      <li class="weather-data">
        <p class="month">Nov</p>
        <p class="day">09</p>
      </li>
      <li class="weather-c">
        <p class="forecast">65</p>
        <p class="loc">SHANGHAI</p>
      </li>
    </ul>
    <div class="weather-info">
      <div class="weather-today">
        <p class="title">Most Sunny</p>
        <p><span>Wind:</span>N 5 mph</p>
        <p><span>Humidity:</span>45%</p>
      </div>
      <div class="weather-week">
        <ul>
          <li>
            <p class="day">Mon</p>
            <p class="icon"><weather-windy-icon/></p>
            <p class="updown"><span class="c low">54</span> / <span class="c hign">54</span></p>
          </li>
          <li>
            <p class="day">Mon</p>
            <p class="icon"><weather-windy-icon/></p>
            <p class="updown"><span class="c low">54</span> / <span class="c hign">54</span></p>
          </li>
          <li>
            <p class="day">Mon</p>
            <p class="icon"><weather-windy-icon/></p>
            <p class="updown"><span class="c low">54</span> / <span class="c hign">54</span></p>
          </li>
          <li>
            <p class="day">Mon</p>
            <p class="icon"><weather-windy-icon/></p>
            <p class="updown"><span class="c low">54</span> / <span class="c hign">54</span></p>
          </li>
          <li>
            <p class="day">Mon</p>
            <p class="icon"><weather-windy-icon/></p>
            <p class="updown"><span class="c low">54</span> / <span class="c hign">54</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import WeatherCloudyIcon from "../../../node_modules/vue-material-design-icons/weather-cloudy";
  import WeatherFogIcon from "../../../node_modules/vue-material-design-icons/weather-fog";
  import WeatherHailIcon from "../../../node_modules/vue-material-design-icons/weather-hail";
  import WeatherLightningIcon from "../../../node_modules/vue-material-design-icons/weather-lightning";
  import WeatherLightningRainyIcon from "../../../node_modules/vue-material-design-icons/weather-lightning-rainy";
  import WeatherNightIcon from "../../../node_modules/vue-material-design-icons/weather-night";
  import WeatherPartlycloudyIcon from "../../../node_modules/vue-material-design-icons/weather-partlycloudy";
  import WeatherPouringIcon from "../../../node_modules/vue-material-design-icons/weather-pouring";
  import WeatherRainyIcon from "../../../node_modules/vue-material-design-icons/weather-rainy";
  import WeatherSnowyIcon from "../../../node_modules/vue-material-design-icons/weather-snowy";
  import WeatherSnowyRainyIcon from "../../../node_modules/vue-material-design-icons/weather-snowy-rainy";
  import WeatherSunnyIcon from "../../../node_modules/vue-material-design-icons/weather-sunny";
  import WeatherSunsetDownIcon from "../../../node_modules/vue-material-design-icons/weather-sunset-down";
  import WeatherSunsetIcon from "../../../node_modules/vue-material-design-icons/weather-sunset";
  import WeatherSunsetUpIcon from "../../../node_modules/vue-material-design-icons/weather-sunset-up";
  import WeatherWindyIcon from "../../../node_modules/vue-material-design-icons/weather-windy";
  import WeatherWindyVariantIcon from "../../../node_modules/vue-material-design-icons/weather-windy-variant";
  export default {
    components: {
      WeatherWindyVariantIcon,
      WeatherWindyIcon,
      WeatherSunsetUpIcon,
      WeatherSunsetIcon,
      WeatherSunsetDownIcon,
      WeatherSunnyIcon,
      WeatherSnowyRainyIcon,
      WeatherSnowyIcon,
      WeatherRainyIcon,
      WeatherPouringIcon,
      WeatherPartlycloudyIcon,
      WeatherNightIcon,
      WeatherLightningRainyIcon,
      WeatherLightningIcon,
      WeatherHailIcon,
      WeatherFogIcon,
      WeatherCloudyIcon},
    name: 'weather',
    data () {
      return {
        name: 'weather',
        weeks: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    }
  }
</script>

<style>
  #WEATHER {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  .weather-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .weather-head {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  .weather-head li {
    display: inline-block;
    padding: 1em 2em;
    color: white;
    font-size: 3em;
    font-weight: bold;
  }
  .weather-head .weather-data {
    float: left;
  }
  .weather-head .weather-c {
    float: right;
  }
  .weather-c p {
    line-height: 1;
    text-align: right;
  }
  .weather-c .forecast {
    font-size: 4em;
    font-weight: bolder;
  }
  .weather-c .forecast::after {
    content: 'o';
    position: relative;
    top: -80px;
    font-size: 0.2em;
    font-weight: normal;
  }
  .weather-data .month::after {
    content: '1';
    display: block;
    font-size: 0px;
    font-weight: 0px;
    position: relative;
    top: 5px;
    left: 8px;
    width: 20px;
    height: 5px;
    background-color: white;
  }
  .weather-data .day {
    font-weight: bolder;
    font-size: 2em;
  }
  .weather-info {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 200px;
    position: relative;
    top: -200px;
    font-size: 0px;
    padding-top: 1.5rem;
  }
  .weather-today, .weather-week {
    display: inline-block;
  }
  .weather-info .weather-today {
    font-size: 1rem;
    padding-left: 1rem;
  }
  .weather-info .weather-today p{
    text-align: left;
    font-size: 3em;
    color: #AB9781;
  }
  .weather-today p.title{
    color: white;
    font-weight: bold;
    font-size: 4em;
  }
  .weather-info .weather-week {
    width: 80%;
  }
  .weather-info .weather-week ul {
    font-size: 0px;
    color: white;
  }
  .weather-week li {
    display: inline-block;
    font-size: 3.5rem;
    width: 20%;
  }
  .weather-week li p {
    text-align: center;
  }
  .weather-week li p.icon .material-design-icon {
    fill: white;
  }
  .weather-week li p.updown span::after {
    content: 'o';
    position: relative;
    top: -20px;
    font-size: 0.2em;
    font-weight: bold;
  }
</style>
