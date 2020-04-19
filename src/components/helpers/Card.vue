<template>
    <div class="my-3 mx-3" >
        <div class="card pcard" >
            <div style="height: 180px;">
                <img class="card-img-top" :src="portfolio.pictures[0]" alt="Card image cap">
            </div>
            <div class="card-body pborder-top">
                <h5 class="title2">{{portfolio.name}}</h5>
                <!-- <h6 class="card-subtitle mb-2 text-muted">{{portfolio.category}}</h6> -->
                <div >
                    <div class="pb-1 bheight">
                        <span class="badge mr-2 mb-2" v-for="tech in portfolio.technologies" :key="tech">{{tech}}</span>
                    </div>
                <p class="title3 m-0 pb-2 pheight pt-1" v-html="portfolio.description.length > 100 ? portfolio.description.substring(0, 105) + '...' : portfolio.description">{{}}</p>
                </div>
                <div class='text-center mt-2'>
                    <a href="" class="btn-sm btn btn-outline-secondary no-outline" @click.prevent="showModal">read more</a>
                    <a href="#" class="btn-sm btn btn-outline-secondary no-outline ml-4" v-if="portfolio.visit" @click.prevent='open(portfolio.visit)'>visit website</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    components: {
        
    },
    props: {
        portfolio: {
            type: Object
        }
    },
    data () {
        return {
        
        }
    },
    methods: {
        open(url) {
            window.open(url, '_blank')
        },
        showModal() {
            this.$emit('show', this.portfolio)
        }
    }
}
</script>

<style scoped>

img {
    border-radius: 10px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    max-width: 100%; max-height: 100%;  object-fit: cover;
}


.img-div img{
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
    height: 105px;
    max-height: 120px;
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

.pcard-body:active {
    transition: all 0.5s;
    background-color: rgb(233, 233, 233);
    cursor: pointer;
    box-shadow: 1px 1px 10px rgb(205, 205, 205);
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