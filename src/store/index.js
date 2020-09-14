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
      requestedFeatures: [],
      dateRange: { start: new Date(), end: new Date() },
      dateRangeShort: "",
      question: "",
      DLnum: "",
      DLexp: new Date(),
      DLexpShort: "",
      DLstate: ""
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
