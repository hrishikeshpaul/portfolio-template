<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar @scroll="scrollTo"/>
    <div class="parent">
      <Home />
      <About id="about" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Recommendation />
      <Contact id="contact"/>
      <Footer />
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
  methods: {
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
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

@media screen and (max-width: 400px){
  #app {
    width: fit-content;
  }
}

.parent {
  margin-top: 80px;
  padding-top: 40px;
  position: relative;
  /* background-color: red; */
}

.pgray {
  color: #535a5e
}

.pblue {
   color: #669DB3FF
}
</style>
