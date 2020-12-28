import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  scrollBehavior(){
    return window.scrollTo({top:0, behavior: 'smooth'})
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
