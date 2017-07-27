import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/login.vue'
import Hello from '../components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
