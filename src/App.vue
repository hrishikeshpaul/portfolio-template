<template>
  <div id="app" :class="{'bg-white': !nightMode, 'bg-dark': nightMode, 'text-dark': !nightMode, 'text-light': nightMode}">
    <Navbar @scroll="scrollTo" @nightMode="switchMode"/>
    <div class="parent">
      <Home data-aos="fade" data-aos-once="true" data-aos-duration="1000" :nightMode="nightMode" />
      <About id="about" :nightMode="nightMode" />
      <Skills id="skills" :nightMode="nightMode" />
      <Portfolio id="portfolio" :nightMode="nightMode" />
      <Recommendation :nightMode="nightMode" />
      <Contact id="contact" :nightMode="nightMode" />
      <Footer :nightMode="nightMode" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Recommendation from './components/Recommendation'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Portfolio,
    Recommendation,
    Contact,
    Footer
  },
  data () {
    return {
      nightMode: false
    }
  },
  methods: {
    switchMode(mode) {
      this.nightMode = mode
    },
    scrollTo(ele) {
      if (ele== 'home') {
        window.scrollTo({top: -80, behavior: 'smooth'});
      } else {
        var elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({top: elementPosition+5, behavior: 'smooth'});
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

@media screen and (max-width: 580px){
  #app {
    width: fit-content;
  }
}

.parent {
  margin-top: 78px;
  padding-top: 40px;
  position: relative;
}

.pgray {
  color: #535a5e
}

.pblue {
   color: #669DB3FF
}

.bg-dark2 {
  background-color: #262c30 !important;
}

.text-light {
  color: #d3d2d2 !important;
}
</style>
