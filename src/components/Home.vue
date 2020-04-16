<template>
    <div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
                    <img :src="picture" />
                </div>
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
                    <span class="home-title pgray">Hello there!</span>
                    <div>
                        <p>I'm {{name}}, a technology enthusiast currently pursuing my Master's in Computer Science at Indiana University Bloomington. Majority of my work consists of web and software development, but lately I have been spending time in the field of Artificial Intelligence and Computer Vision.</p>
                    </div>
                </div>
        </div>
        </div>
    </div>
</template>

<script>
import potrait from '../assets/potrait.jpg'
export default {
    name: "Home",
    data () {
        return {
            picture: potrait,
            name: "Hrishikesh Paul"
        }
    }
}
</script>

<style scoped>
.home-title {
    font-size: 30px;
    font-weight: 600;
}

img {
    transform: rotateY(180deg);
}
</style>