import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      location: "",
      name: "",
      number: "",
      email: "",      
      dateRange: { start: new Date(), end: new Date() },
      dateRangeShort: "", 
      isOver21: null,     
      DlNumber: "",
      DlExpiry: new Date(),
      DlExpiryShort: "",
      DlState: "",
      requestedFeatures: [],
      comment: "",
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
