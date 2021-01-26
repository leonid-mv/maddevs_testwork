import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vue-scroll'
import dateFilter from '@/filters/date.filter'

import './assets/sass/index.sass'

Vue.config.productionTip = false

Vue.use(vuescroll)

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
