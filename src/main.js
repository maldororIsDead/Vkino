import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'

import Poster from './components/Poster'
import movieCard from './components/movieCard'
import Home from './components/Home'
import News from './components/News'

import {store} from './store/'

Vue.use($)
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
    routes: [
        { path: '/poster', component: Poster },
        { path: '/movie-card/:id', name: 'movie', component: movieCard },
        { path: '/', component: Home },
        { path: '/about-us/news', component: News },
    ]
})
new Vue({
  el: '#app',
  render: h => h(App),
    router,
    store,
})