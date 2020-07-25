import Vue from 'vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
var VueCookie = require('vue-cookie');

Vue.use(VueCookie);
Vue.use(VueParallaxJs)


Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
