import Vue from 'vue'
import VueRouter from 'vue-router'
import sign from '../components/Signin.vue'
import dashboard from '../components/dashboard.vue'
import home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
path:'/signin',
    name: 'signin',
    component: sign
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
   
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
