import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
 import login from '../components/LoginPage.vue'
import HomeView from '../views/IndexPage.vue';
import HomePage from '../components/HomePageTwo.vue'
import MovieDetail from '../components/MovieDetails.vue';
import cart from '../components/CartComp.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/about/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'loginPage',
    component: login
  },
  {
    path: '/movie/:id',
    name: 'movieDetail',
    component: MovieDetail
  },
  {
    path: '/cart',
    name: 'cartComp',
    component: cart
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
