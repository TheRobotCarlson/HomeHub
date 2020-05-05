import Vue from 'vue'
import Router from 'vue-router'
const routerOptions = [
  { path: '/', component: 'Dashboard' },
  { path: '/photos', component: 'Photos' },
  { path: '/recipe', component: 'Recipe' },
  { path: '/messages', component: 'Message' },
  { path: '/music', component: 'Music' },
  { path: '/about', component: 'About' },
  { path: '*', component: 'Photos' }
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  }
})
Vue.use(Router)
export default new Router({
  routes,
  mode: 'history'
})
