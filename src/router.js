import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Lists from './pages/lists.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehaviour: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/list', component: Lists },
    { path: '*', redirect: '/' },
  ]
})
