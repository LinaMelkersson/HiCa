import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carousel from '../components/Carousel'
import Checkout from '../views/Checkout.vue'
import SingleProductPage from '../views/SingleProductPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Carousel',
    name: 'Carousel',
    component: Carousel
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
  path: '/SingleProductPage',
  name: 'SingleProductPage',
  component: SingleProductPage
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
