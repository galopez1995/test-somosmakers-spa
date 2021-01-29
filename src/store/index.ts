import Vue from "vue";
import Vuex from "vuex";

import { AppModule } from "./modules/app";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false
  },
  modules: {
    app: AppModule
  }
});

export default store;
