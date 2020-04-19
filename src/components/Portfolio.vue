<template>
    <div class="py-4 bg-light">
      <div class="container">
        <p class="title pgray text-center">portfolio.</p>
            <hr width="50%" />
            <br />
        <div class="row">
          <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12" v-for="portfolio in portfolio_info" :key="portfolio.name">
            <Card :portfolio="portfolio" @show="showModalFn"/>
          </div>
        </div>
      </div>
      <transition name="modal">
        <Modal :showModal="showModal" @close="showModal = false" v-if="showModal" :portfolio="modal_info" />
      </transition>
    </div>
</template>

<script>
import Card from './helpers/Card'
import Modal from './helpers/Modal'
import info from '../../info'

export default {
    name: "Portfolio" ,
    components: {
      Card,
      Modal
    },
    data () {
        return {
           portfolio_info: info.portfolio,
           showModal: false,
           modal_info: {}
        }
    },
    methods: {
      showModalFn(portfolio) {
        this.modal_info = portfolio
        this.showModal = true
      }
    }
   
}
</script>

<style scoped>
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

</style>