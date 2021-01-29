import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import es from 'vuetify/src/locale/es'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
//   theme: {
//     options: {
//       customProperties: true
//     },
//     themes: {
//       light: {
//         primary: '#6CA133',
//         secondary: '#0E164B',
//         accent: '#0E164B',
//         error: '#FF5252',
//         info: '#2196F3',
//         success: '#6CA133',
//         warning: '#FFC107'
//       },
//       dark: {
//         primary: colors.blue.lighten3
//       }
//     }
//   },
  lang: {
    locales: { es },
    current: 'es'
  }
})
