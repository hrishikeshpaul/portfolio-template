import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
var VueCookie = require('vue-cookie');

Vue.use(VueCookie);
Vue.use(VueParallaxJs);
Vue.use(VueAnalytics, {
  id: 'UA-151170257-1'
})


Vue.config.productionTip = false


new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
