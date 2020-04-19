<template>
    <div>
        <!-- <div :id="'carouselExampleControls' + name " class="carousel slide rborder" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item imgdiv" v-for="(image, idx) in images" :key="image" :class="{ active: idx==0 }" >
                    <img class="d-block img-fluid w-100" :src="image" :alt="image" style="max-width: 100%; max-height: 100%;  object-fit: cover;">
                </div>    
            </div>
            <a class="carousel-control-prev" :href="'#carouselExampleControls' + name" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" :href="'#carouselExampleControls' + name" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div> -->

        <div class="carousel">
            <div class="slides">
                <img :src="image"  v-for="(image, idx) in images" :key="image" alt="slide image" class="slide">
            </div>
            <div class="controls">
                <div class="control prev-slide">&#9668;</div>
                <div class="control next-slide">&#9658;</div>
            </div>
            </div>

    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
    name: "Carousel",
    components: {
         agile: VueAgile 
    },
    props: {
        images: {
            type: Array
        },
        name: {
            type: String
        }
    },
    mounted() {
        const delay = 3000; //ms

        const slides = document.querySelector(".slides");
        const slidesCount = slides.childElementCount;
        const maxLeft = (slidesCount - 1) * 100 * -1;

        let current = 0;

        function changeSlide(next = true) {
        if (next) {
            current += current > maxLeft ? -100 : current * -1;
        } else {
            current = current < 0 ? current + 100 : maxLeft;
        }

        slides.style.left = current + "%";
        }

        let autoChange = setInterval(changeSlide, delay);
        const restart = function() {
        clearInterval(autoChange);
        autoChange = setInterval(changeSlide, delay);
        };

        // Controls
        document.querySelector(".next-slide").addEventListener("click", function() {
        changeSlide();
        restart();
        });

        document.querySelector(".prev-slide").addEventListener("click", function() {
        changeSlide(false);
        restart();
        });
    }
}
</script>

<style scoped>
.rborder {
    border-top-left-radius: 7px !important;
    border-top-right-radius: 7px !important;
}

.imgdiv {
    height: 350px;
}

@media screen and (max-width: 400px){
    .imgdiv {
        height: 150px;
    }
}

.carousel {
  width: 100%;
  height: 350px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); */
}

@media screen and (max-width: 400px){
    .carousel {
        height: 150px;
    }
}

.carousel:hover .controls {
  opacity: 1;
}
.carousel .controls {
  opacity: 0;
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  justify-content: space-between;
  width: 100%;
  z-index: 99999;
  transition: all ease 0.5s;
}

img {
    /* width: 20%; */
    /* height: 20%; */
    max-width: 100%; max-height: 100%;  object-fit: cover;
}
.carousel .controls .control {
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  opacity: 0.5;
  transition: ease 0.3s;
  cursor: pointer;
}
.carousel .controls .control:hover {
  opacity: 1;
}
.carousel .slides {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  width: 100%;
  transition: 1s ease-in-out all;
}
.carousel .slides .slide {
  min-width: 100%;
  min-height: 250px;
  height: auto;
}


</style>