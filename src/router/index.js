import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Hello from '@/components/homepage'
import fortheBadge from '@/components/fortheBadge'

import neo from '@/components/OnePaper/neo'
import City from '@/components/OnePaper/20171012-city'
import OnePaperShareCard from '@/components/OnePaper/20171019-shareCard.vue'
import OnePaperLoginBall from '@/components/OnePaper/20171028-LoginBall.vue'
import OnePaperWeather from '@/components/OnePaper/20171030-Weather.vue'
import OnePaperBeginWithDogs from '@/components/OnePaper/20180216-beginWithDogs'

import article from '@/components/Files/article'

Vue.use(Router);

const routes = [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/articles/:id', name: 'article', component: article, props: true},
    { path: '/forthebadge', name: 'forthe-badge', component: fortheBadge},
    { path: '/onepaper', name: 'neo', component: neo, },
    { path: '/onepaper/cityInfo', name: 'city', component: City},
    { path: '/onepaper/shareCard', name: 'shareCard', component: OnePaperShareCard},
    { path: '/onepaper/loginBall', name: 'loginBall', component: OnePaperLoginBall },
    { path: '/onepaper/weather', name: 'weather', component: OnePaperWeather },
    { path: '/onepaper/beginWithDogs', name: 'dogs', component: OnePaperBeginWithDogs }
]

const router = new Router({
    routes
});

export default router
