import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './style.css'
import './globalComponents'

import VueSweetalert2 from 'vue-sweetalert2'
import moment from 'moment-timezone'
/* eslint-disable @typescript-eslint/no-var-requires */
const VueMoment = require('vue-moment')
/* eslint-disable @typescript-eslint/no-var-requires */
const Vuelidate = require('vuelidate')

Vue.use(VueSweetalert2)
Vue.use(Vuelidate)
Vue.use(VueMoment, {
  moment
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
