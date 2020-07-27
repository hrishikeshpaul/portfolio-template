<template>
  <div class="my-3 mx-3">
    <div
      class="card smcard"
      :class="{
        'pcard-dark': nightMode,
        pcard: !nightMode,
        'bg-dark3': nightMode,
      }"
    >
      <div style="height: 180px;">
        <img
          class="card-img-top"
          :src="portfolio.pictures[0].img"
          alt="Card image cap"
        />
      </div>
      <div class="card-body pborder-top">
        <h5 class="title2">{{ portfolio.name }}</h5>
        <div>
          <div class="pb-1 bheight">
            <span
              class="badge mr-2 mb-2 "
              v-for="tech in portfolio.technologies"
              :key="tech"
              :class="{ 'bg-dark4': nightMode }"
              >{{ tech }}</span
            >
          </div>
          <p
            class="title3 m-0 pb-2 pheight pt-1"
            v-html="
              portfolio.description.length > 100
                ? portfolio.description.substring(0, 105) + '...'
                : portfolio.description
            "
          >
          </p>
        </div>
        <div class="text-center mt-2">
          <button
            href=""
            class="btn-sm btn btn-outline-secondary no-outline"
            @click.prevent="showModal"
          >
            read more
          </button>
          <button
            href="#"
            class="btn-sm btn btn-outline-secondary no-outline ml-4"
            v-if="portfolio.visit"
            @click.prevent="open(portfolio.visit)"
          >
            visit website
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    portfolio: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
    showModal() {
      this.$emit("show", this.portfolio);
    },
  },
};
</script>

<style scoped>
img {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.img-div img {
  /* object-fit: cover;
    overflow: hidden; */
  margin-left: auto;
  margin-right: auto;
  display: block;
  /* object-position: 50% 120%;
    max-width: 300px !important; */
}

.bheight {
  height: 65px;
  overflow: auto;
}

.pheight {
  height: 110px;
  max-height: 130px;
  overflow: auto;
  text-align: justify;
}

div.img-div {
  position: absolute;
  width: 100%;
  height: 100%;
}
.pborder-top {
  border-top: 1px solid rgb(193, 193, 193);
}

.pcard {
  background-color: rgb(255, 255, 255);
  border-radius: 7px;
  border: none;
  box-shadow: 1px 1px 12px rgb(233, 233, 233);
  transition: all 0.5s;
  height: 460px;
}

.pcard:hover {
  transition: all 0.5s;
  /* cursor: pointer; */
  box-shadow: 1px 1px 15px rgb(216, 216, 216);
}

.pcard-dark {
  border-radius: 7px;
  border: none;
  background-color: #30363a !important;
  /* box-shadow: 1px 1px 12px rgb(53, 53, 53); */
  transition: all 0.5s;
  height: 460px;
}

.pcard-dark:hover {
  transition: all 0.5s;
  /* cursor: pointer; */
  box-shadow: 1px 1px 12px rgb(53, 53, 53);
}

.pcard-body {
  border-top: 1px solid rgb(220, 220, 220);
  z-index: -1;
  background-color: rgb(253, 254, 255);
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.bg-dark3 {
  background-color: rgb(82, 82, 82);
}

.bg-dark4 {
  background-color: #494e55 !important;
}
</style>
