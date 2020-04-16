<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <div class="parent">
      <Home />
      <About />
      <Skills />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Skills
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
  position: relative;
}

.pgray {
  color: #535a5e
}

.pblue {
   color: #669DB3FF
}
</style>
