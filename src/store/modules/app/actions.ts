import Vue from 'vue'
import { ActionContext } from 'vuex'
import { IAppState } from './state'
import { IRootState } from '../../types'

export interface IAppActions {
  changeLocale(context: ActionContext<IAppState, IRootState>, locale: string): void

  setCookieConsentVersion(context: ActionContext<IAppState, IRootState>, version: string): void

  toggleSideBar(context: ActionContext<IAppState, IRootState>): void

  showLoading(context: ActionContext<IAppState, IRootState>): void

  hideLoading(context: ActionContext<IAppState, IRootState>): void

  alertPrompt(context: ActionContext<IAppState, IRootState>, param: string): void

  confirm(context: ActionContext<IAppState, IRootState>, text: string): void

  toggleHelp(context: ActionContext<IAppState, IRootState>, text: string): void
}

export const AppActions: IAppActions = {
  changeLocale: ({ commit }: ActionContext<IAppState, IRootState>, locale: string) => commit('CHANGE_LOCALE', locale),
  setCookieConsentVersion: ({ commit }: ActionContext<IAppState, IRootState>, version: string) => commit('SET_COOKIE_CONSENT_VERSION', version),
  toggleSideBar: ({ commit }: ActionContext<IAppState, IRootState>) => commit('TOGGLE_SIDEBAR'),
  showLoading: ({ commit }: ActionContext<IAppState, IRootState>) => commit('SHOW_LOADING'),
  hideLoading: ({ commit }: ActionContext<IAppState, IRootState>) => commit('HIDE_LOADING'),
  toggleHelp: ({ commit }: ActionContext<IAppState, IRootState>, data: any) => commit('TOGGLE_HELP', data),
  alertPrompt(_: ActionContext<IAppState, IRootState>, param: any) {
    Vue.swal({
      title: 'Somosmakers',
      text: param.text,
      type: param.type || '',
      html: param.text,
      backdrop: 'false rgba(0,0,0,0.5)',
      allowOutsideClick: false,
      imageUrl: './img/logo.jpg',
      confirmButtonText: 'OK'
    })
  },
  confirm(_: ActionContext<IAppState, IRootState>, text: string) {
    return new Promise((resolve, reject) => {
      Vue.swal({
        title: 'Somosmakers',
        text: text,
        backdrop: 'false rgba(0,0,0,0.5)',
        allowOutsideClick: false,
        imageUrl: './img/logo.jpg',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCELAR'
      })
        .then((result) => {
          if (result.value) {
            resolve('OK')
          } else {
            resolve('')
          }
        })
        .catch(() => reject(''))
    })
  }
}
