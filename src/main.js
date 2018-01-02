// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import Vue from 'vue'
import {Button, Select} from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import '../mock/mock'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Button)
Vue.use(Select)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
