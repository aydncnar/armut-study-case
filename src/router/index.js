import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/service/:id/:page',
    name: 'Service',
    component: () => import(/* webpackChunkName: "service" */ "../views/Service")
  },
]

const router = new VueRouter({
  routes
})

export default router
