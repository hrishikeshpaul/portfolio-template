<template>
    <div>
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" :class="{'bg-light': !nightMode, 'bg-dark': nightMode, 'text-light': nightMode}">
                    <div class="">
                        <Carousel :images="portfolio.pictures" :name="portfolio.name"/>
                    </div>
                    <div class="modal-body my-0 pb-0 px-4">
                        <div class="title1">
                            <span><a href="#" @click.prevent="open(portfolio.visit)" :class="{'text-light': nightMode}">{{portfolio.name}}</a></span>
                        </div>
                        <hr class="m-1" :class="{'pgray': !nightMode, 'bg-secondary': nightMode}" />
                        <div class="mb-2 date" :class="{'text-light': nightMode, 'pbgray': nightMode}">
                            <span>{{portfolio.date}} • {{portfolio.category}}</span>
                        </div>
                        <div class="pb-1 bheight">
                            <span class="badge mr-2 mb-2 text-dark" v-for="tech in portfolio.technologies" :key="tech">{{tech}}</span>
                        </div>

                        <div style="text-align: justify; overflow: auto; max-height: 350px;">
                            <span v-html="portfolio.description"></span>
                        </div>
                    </div>

                    <div class="text-center py-3">
                        <button class="btn w-25 mr-3" @click="open(portfolio.github)">github</button>
                        <button class="btn w-25" @click="$emit('close')">close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from './Carousel'

export default {
    name: 'Modal',
    components: {
        Carousel
    },
    props: {
        showModal: {
            type: Boolean
        },
        portfolio: {
            type: Object
        },
        nightMode: {
            type: Boolean
        }
    },
    methods: {
        open(url) {
            window.open(url, '_blank')
        },
    }
}
</script>

<style scoped>
a {
    text-decoration: none; 
    color: black;
    transition: all 0.2s;
}

a:hover {
    transition: all 0.2s;
    color: gray;
}

.date {
    font-size: 14px;
    font-weight: 400;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .5s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 40%;
  margin: 0px auto;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

@media screen and (max-width: 1600px){
    .modal-container {
        width: 60%;

    }
}

@media screen and (max-width: 1200px){
    .modal-container {
        width: 80%;

    }
}

@media screen and (max-width: 580px){
    .modal-container {
        width: 90%;

    }
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
}

.badge:hover { 
    transition: all 0.5s;
    box-shadow: 2px 2px 5px rgb(179, 179, 179);

}

.btn {
    border-color: #669DB3FF;
    color: #669DB3FF
}

.btn:hover {
    background-color: #669DB3FF;
    border-color: #669DB3FF;
    color: white;
}

.btn:focus {
    background-color: #669DB3FF;
    border-color: #669DB3FF;
    color: white;
}
</style>