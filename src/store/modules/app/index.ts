import { Module } from "vuex";
import { AppDefaultState, IAppState } from "./state";
import { AppActions } from "./actions";
import { AppGetters } from "./getters";
import { AppMutations } from "./mutations";
import { IRootState } from "../../types";

export const AppModule: Module<IAppState, IRootState> = {
  namespaced: true,
  actions: {
    ...AppActions
  },
  getters: {
    ...AppGetters
  },
  state: {
    ...AppDefaultState()
  },
  mutations: {
    ...AppMutations
  }
};
