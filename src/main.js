import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueNavigationBar from 'vue-navigation-bar'
Vue.component('vue-navigation-bar', VueNavigationBar)
import VModal from 'vue-js-modal'
// import VueAnalytics from 'vue-analytics'
import VueGtm from 'vue-gtm'
Vue.use(VModal)
Vue.config.productionTip = false
import VCalendar from 'v-calendar'
Vue.use(VCalendar, {})

Vue.use(VueGtm, {
  id: 'GTM-M2LB2K3',
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: false, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
