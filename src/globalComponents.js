/**
 * Global Components
 */
import Vue from 'vue'

// App Picker component
import AppDatePicker from 'Components/AppPicker/AppDatePicker'
import AppTimePicker from 'Components/AppPicker/AppTimePicker'

// App Dialog component
import AppDialog from 'Components/AppDialog/AppDialog'

import AppHeader from 'Components/AppHeader/AppHeader'

Vue.component('appDatePicker', AppDatePicker)
Vue.component('appTimePicker', AppTimePicker)
Vue.component('appDialog', AppDialog)
Vue.component('appHeader', AppHeader)
