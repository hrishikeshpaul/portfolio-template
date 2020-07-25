<template>
  <div style="overflow: auto;">
    <div class="prow">
      <div
        class="pcolumn"
        v-for="(i, idx) in images"
        :key="i.title"
        :class="{
          flex: design ? '100%' : '50%',
          '-ms-flex': design ? '100%' : '50%',
          'max-width': design ? '100%' : '50%',
        }"
      >
        <img
          :src="i.img"
          style="width:100%"
          :id="`gi${idx}`"
          @click="showImg(idx)"
          class="g-img"
        />
        <div class="mt-1">
          <p style="font-weight: 500">{{ i.title }}</p>
        </div>
      </div>
    </div>
    <div id="myModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="modalImg" />
      <div id="caption"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: {
      type: Array,
    },
    design: {
      type: Boolean,
    },
  },
  data() {
    return {
      modal: null,
    };
  },
  methods: {
    showImg(idx) {
      var modal = document.getElementById("myModal");
      var img = document.getElementById(`gi${idx}`);
      var modalImg = document.getElementById("modalImg");
      modal.style.display = "block";
      modalImg.src = img.src;

      var span = document.getElementsByClassName("close")[0];

      span.onclick = function() {
        modalImg.classList.add("closeModal");
        modal.classList.add("modalClose");
        setTimeout(() => {
          modal.style.display = "none";
          modalImg.classList.remove("closeModal");
          modal.classList.remove("modalClose");
        }, 200);
      };
    },
  },
};
</script>

<style scoped>
.prow {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

.pcolumn img {
  border-radius: 5px;
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .pcolumn {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .pcolumn {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}

.g-img {
  cursor: pointer;
  transition: all 0.5s;
}
.g-img:hover {
  opacity: 0.7;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  transition: all 0.5s;
  animation-name: modalOpen;
  animation-duration: 0.2s;
}

@keyframes modalOpen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalClose {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 100%;
  max-width: 1200px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.2s;
  animation-name: zoom;
  animation-duration: 0.2s;
}

@keyframes zoom {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.closeModal {
  animation-name: zoomClose;
  animation-duration: 0.2s;
}

@keyframes zoomClose {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 95%;
  }
}
</style>
