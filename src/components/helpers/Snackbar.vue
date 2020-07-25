<template>
  <div>
    <div
      id="snackbar"
      :class="{ show: showSnackbar }"
      :style="{ 'background-color': snackbarColor }"
    >
      {{ snackbarMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    showSnackbar: {
      type: Boolean,
    },
    snackbarMessage: {
      type: String,
    },
    snackbarColor: {
      type: String,
    },
  },
  watch: {
    showSnackbar(nv) {
      if (nv) {
        setTimeout(() => {
          this.$emit("close", false);
        }, 1900);
      }
    },
  },
};
</script>

<style scoped>
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  color: #fff;
  text-align: center;
  border-radius: 7px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  float: right;
  top: 100px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 100px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 100px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    top: 100px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
</style>
