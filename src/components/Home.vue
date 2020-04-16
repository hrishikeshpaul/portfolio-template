<template>
    <div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
                    <img :src="picture" />
                </div>
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
                    <span class="home-title pgray">hello there!</span>
                    <div>
                        <p>{{description}}</p>
                    </div>
                    <div class='text-center pb-4'>
                        <button class="btn mx-2" @click="open('linkedin')"><i class="fab fa-linkedin"></i></button>
                        <button class="btn mx-2" @click="open('github')"><i class="fab fa-github"></i></button>
                        <button class="btn mx-2" @click="open('angellist')"><i class="fab fa-angellist"></i></button>
                        <button class="btn mx-2" @click="open('resume')"><i class="fa fa-file"></i></button>
                    </div>
                </div>
        </div>
        </div>
    </div>
</template>

<script>
import info from '../../info'

export default {
    name: "Home",
    components: {
    },
    data () {
        return {
            picture: info.flat_picture,
            description: info.description,
            name: info.name,
            linkedin: info.links.linkedin,
            github: info.links.github,
            angellist: info.links.angellist,
            resume: info.links.resume
        }
    },
    methods: {
        open(link) {
            switch (link) {
                case 'linkedin': window.open(this.linkedin, '_blank'); break;
                case 'github': window.open(this.github, '_blank'); break;
                case 'angellist': window.open(this.angellist, '_blank'); break;
                case 'resume': window.open(this.resume, '_blank'); break;
            }
        }
    }
}
</script>

<style scoped>
.home-title {
    font-size: 28px;
    font-weight: 500;
}

p {
    font-weight: 400;
}

img {
    transform: rotateY(180deg);
    
}

@media only screen and (max-width: 600px) {
    img {
        object-fit: cover;
        border-radius: 50%;
        height: 150px;
        width: 150px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 2px solid rgb(205, 205, 205);
    }
}

.fa {
    font-size: 15px;
}

.btn {
    background-color: #535a5e;
    border-radius: 50%;
    color: white;
}

.btn:hover {
    background-color: #72797d;
    border-radius: 50%;
    color: white;
}

.btn:active {
    background-color: #3c3d3e;
    border-radius: 50%;
    color: white;
}

.btn:focus {
    outline: none !important;
}

p {
    text-align: justify;
}
</style>