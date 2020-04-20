<template>
    <div>
        <div class="carousel">
            <div class="slides">
                <img :src="image"  v-for="image in images" :key="image" alt="slide image" class="slide">
            </div>
            <div class="controls">
                <div class="control prev-slide">&#9668;</div>
                <div class="control next-slide">&#9658;</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    props: {
        images: {
            type: Array
        },
        name: {
            type: String
        }
    },
    mounted() {
        const delay = 2000; //ms

        const slides = document.querySelector(".slides");
        const slidesCount = slides.childElementCount;
        const maxLeft = (slidesCount - 1) * 100 * -1;

        let current = 0;

        function changeSlide(next = true) {
            if (next) {
                current += current > maxLeft ? -100 : current * - 1;
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
    width: 50%;
    max-width: 90%; max-height: 90%;  object-fit: cover;
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
  min-height: 150px;
  height: auto;
}

</style>