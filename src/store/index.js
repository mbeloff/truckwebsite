import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      // location: "",
      name: "",
      number: "",
      email: "",
      dateRange: { start: null, end: null },
      dateRangeShort: "",
      ageCheck: true,
      DlNumber: "",
      DlExpiry: null,
      DlExpiryShort: "",
      DlState: "",
      requestedFeatures: [],
      removalistRequest: [],
      comment: ""
    }
  },
  mutations: {
    storeForm(state, n) {
      state.form = n;
    }
  },
  actions: {},
  modules: {}
});
