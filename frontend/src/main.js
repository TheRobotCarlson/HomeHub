import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
  disableClick: false,
  touchClass: '',
  tapTolerance: 10,
  touchHoldTolerance: 400,
  swipeTolerance: 30,
  longTapTimeInterval: 400
})
Vue.use(Vuetify)

const vuetifyOpts = {
  preset,
  rtl: false,
  theme: { dark: true }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(vuetifyOpts),
  render: h => h(App),
  data () {
    return {
      test: true,
      navbarVisible: true
    }
  }
})
