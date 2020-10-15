import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueNavigationBar from 'vue-navigation-bar'
Vue.component('vue-navigation-bar', VueNavigationBar)
import VModal from 'vue-js-modal'
import VueAnalytics from 'vue-analytics'
Vue.use(VModal)
Vue.config.productionTip = false
import VCalendar from 'v-calendar'
Vue.use(VCalendar, {})

Vue.use(VueAnalytics, {
  id: 'UA-179401641-1',
  router
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
