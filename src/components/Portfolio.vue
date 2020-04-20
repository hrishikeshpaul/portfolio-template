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
        <div class="text-center py-3">
          <button class="btn" @click.prevent="showMore">{{showBtn}}</button>
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
          all_info: info.portfolio,
          portfolio_info: [],
          showModal: false,
          modal_info: {},
          number: 6,
          showBtn: 'show more',
          shower: 0
        }
    },
    created() {
      for(var i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i])
      }
    },
    watch: {
      number() {
        this.portfolio_info = []
        for(var i = 0; i < this.number; i++) {
          this.portfolio_info.push(this.all_info[i])
        }
      }
    },
    methods: {
      showModalFn(portfolio) {
        this.modal_info = portfolio
        this.showModal = true
      },
      showMore() {
        if (this.number != this.all_info.length) {
          this.number += 3

          window.scrollBy({
            top: document.getElementsByClassName('pcard')[0].clientHeight,
            behavior: 'smooth'
          })

          if (this.number > this.all_info.length)
            this.number = this.all_info.length
        }

        if (this.number == this.all_info.length && this.shower == 0) {
          this.shower = 1
          this.showBtn = 'show less'
        }

        else if (this.number == this.all_info.length && this.shower == 1) {
          var elementPosition = document.getElementById('portfolio').offsetTop;
          window.scrollTo({top: elementPosition+5, behavior: 'smooth'});
          this.shower = 0
          this.number = 6
          this.showBtn = 'show more'
        }


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

.btn {
    border-color: rgb(212, 149, 97);
    color: rgb(212, 149, 97);
}

.btn:hover {
    background-color:rgb(212, 149, 97);
    border-color: rgb(212, 149, 97);
    color: white;
}

.btn:focus {
    background-color: rgb(212, 149, 97);
    border-color:rgb(212, 149, 97);
    color: white;
}

</style>