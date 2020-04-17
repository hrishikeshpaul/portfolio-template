<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <Logo />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a class="nav-link" href="/about" @click.prevent="$emit('scroll', 'about')">about</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="/skills" @click.prevent="$emit('scroll', 'skills')">skills</a>
            </li>
            <li class="nav-item mx-2 ">
              <a class="nav-link" href="/portfolio" @click.prevent="$emit('scroll', 'portfolio')">portfolio</a>
            </li>
            <li class="nav-item mx-2">
              
              <a class="nav-link" href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from './helpers/Logo'
export default {
    name: "Navbar",
    components: {
      Logo
    },
    methods: {
      
    }
}
</script>

<style scoped>
.nav-link {
  font-weight: 400;
}
</style>