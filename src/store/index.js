import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
      location: '',
      name: '',
      number: '',
      email: '',
      dateRange: { start: null, end: null },
      dateRangeShort: '',
      ageCheck: null,
      DriversLicenceNumber: '',
      LicenceExpiry: null,
      LicenceExpiryShort: '',
      DriversLicenceState: '',
      requestedFeatures: [],
      // removalistRequest: [],
      comment: ''
    }
  },
  mutations: {
    storeForm(state, n) {
      state.form = n
    },
    // storeRemovalist(state, n) {
    //   state.form.removalistRequest = n
    // }
  },
  actions: {},
  modules: {}
})
