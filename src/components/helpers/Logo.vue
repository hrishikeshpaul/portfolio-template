<template>
  <div class="logo-div">
    <span
      class="logo-title-name"
      :class="{ pgray: !nightMode, 'text-light': nightMode }"
      >{{ name }}</span
    >
    <span class="logo-title-dot pblue">{{ dot }}</span>
  </div>
</template>

<script>
import info from "../../../info";

export default {
  name: "Logo",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      name: info.logo_name,
      dot: ".",
    };
  },
};
</script>

<style scoped>
.logo-div:hover .logo-title-name {
  letter-spacing: 0px;
  transition: 0.5s all;
}

.logo-title-name {
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.5s all;
}

.logo-title-dot {
  font-size: 30px;
  font-weight: 700;
}
</style>
