<template>
  <div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
      style="height: 200px;"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" v-for="image in images" :key="image">
          <img
            class="d-block w-100"
            src="https://picsum.photos/id/237/200/300"
            alt="Second slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    images: {
      type: Array,
    },
    name: {
      type: String,
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
