<template>
  <span class="wave">👋🏽npm </span>
</template>

<script>
export default {
  name: "Wave",
};
</script>

<style scoped>
span.wave {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  } /* The following four values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}
</style>
