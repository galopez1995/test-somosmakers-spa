import { IAppState } from "./state";

export interface IAppMutations {
  CHANGE_LOCALE(state: IAppState, locale: string): void;
  TOGGLE_SIDEBAR(state: IAppState): void;
  SHOW_LOADING(state: IAppState): void;
  HIDE_LOADING(state: IAppState): void;
  TOGGLE_HELP(state: IAppState, data: any): void;
}

export const AppMutations: IAppMutations = {
  CHANGE_LOCALE: (state: IAppState, locale: string) => {
    state.locale = locale;
  },
  TOGGLE_SIDEBAR: (state: IAppState) => {
    state.drawer = !state.drawer;
  },
  SHOW_LOADING: (state: IAppState) => {
    state.loading = true;
  },
  HIDE_LOADING: (state: IAppState) => {
    state.loading = false;
  },
  TOGGLE_HELP: (state: IAppState, data: any) => {
    state.help.show = !state.help.show;
    state.help.title = data.title;
    state.help.subtitle = data.subtitle;
    state.help.message = data.message;
  }
};
