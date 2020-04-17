<template>
    <div>
        <div :id="'carouselExampleControls' + name " class="carousel slide rborder" data-ride="carousel" data-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(image, idx) in images" :key="image" :class="{ active: idx==0 }" style="height: 180px;">
                    <img class="d-block img-fluid w-100" :src="image" :alt="image" style="max-width: 100%; max-height: 100%;  object-fit: cover;">
                </div>    
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
    }
}
</script>

<style scoped>
img {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
}

.rborder {
    border-top-left-radius: 7px !important;
    border-top-right-radius: 7px !important;
}
</style>