<template>
    <div class="py-4 bg-light">
      <div class="container">
        <p class="title pgray text-center">portfolio.</p>
            <hr width="50%" />
            <br />
        <div class="row">
          <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12" v-for="portfolio in portfolio_info" :key="portfolio.name">
            <Card :portfolio="portfolio" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Card from './helpers/Card'
import info from '../../info'
export default {
    name: "Portfolio" ,
    components: {
      Card
    },
    data () {
        return {
           portfolio_info: info.portfolio
        }
    },
   
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
</style>