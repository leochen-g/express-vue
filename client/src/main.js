// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from './config/axiosConfig'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(element)
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
