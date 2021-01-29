import { IAppState } from "./state";

export interface IAppGetters {
  getLocale(state: IAppState): string;
  drawer(state: IAppState): boolean;
  loading(state: IAppState): boolean;
  help(state: IAppState): any;
}

export const AppGetters: IAppGetters = {
  getLocale(state: IAppState): string {
    return state.locale;
  },
  drawer(state: IAppState): boolean {
    return state.drawer;
  },
  loading(state: IAppState): boolean {
    return state.loading;
  },
  help(state: IAppState): boolean {
    return state.help;
  }
};
