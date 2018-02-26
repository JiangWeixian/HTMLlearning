import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '../components/Hello'
import Hello from '../components/Hello'
// import Div2Img from '@/components/Div2Img'

// import neo from '@/components/OnePaper/neo'
// import City from '@/components/OnePaper/20171012-city'
// import OnePaperShareCard from '@/components/OnePaper/20171019-shareCard.vue'
// import OnePaperLoginBall from '@/components/OnePaper/20171028-LoginBall.vue'
// import OnePaperWeather from '@/components/OnePaper/20171030-Weather.vue'
// import OnePaperBeginWithDogs from '@/components/OnePaper/20180216-beginWithDogs'

Vue.use(Router)

// const routes = [
//     { path: '/', name: 'Hello', component: Hello }
//     { path: '/div2img', name: 'Div2Img', component: Div2Img},
//     { path: '/OnePaper', name: 'neo', component: neo, },
//     { path: '/OnePaper/cityInfo', name: 'city', component: City}, 
//     { path: '/OnePaper/shareCard', name: 'shareCard', component: OnePaperShareCard}, 
//     { path: '/OnePaper/loginBall', name: 'loginBall', component: OnePaperLoginBall }, 
//     { path: '/OnePaper/weather', name: 'weather', component: OnePaperWeather }, 
//     { path: '/OnePaper/beginWithDogs', name: 'dogs', component: OnePaperBeginWithDogs }  
// ]

export default new Router({
  mode: 'history',
  routes: [{ path: '/', name: 'Hello', component: Hello }]
})
