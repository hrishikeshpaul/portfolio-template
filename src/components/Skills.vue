<template>
    <div class="container py-4">
        <p class="title pgray text-center">skills</p>
            <hr width="50%" />
            <br />
        <div class="row">
            <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4" v-for="skill in skills" :key="skill.title">
                <div class="bg-div"><i :class="skill.icon"></i></div>
                <div class="title2 pt-2">{{skill.title}}</div>
                <hr width="50%"/>
                <span class="title3">{{skill.info.join(', ')}}</span>
                    
            </div>
            
        </div>
    </div>
</template>

<script>
import info from '../../info'

export default {
    name: "Skills",
    data () {
        return {
            skills: info.skills
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 30px;
    font-weight: 800;
}
.title1 {
    font-size: 24px;
    font-weight: 800;
}

.title2 {
    font-size: 20px;
    font-weight: 500;
}

.title3 {
    font-size: 16px;
    font-weight: 400;
}

.fa, .fas { 
    color: rgb(117, 166, 186);
    font-size: 45px;
    /* font-weight: bold; */
    transition: all 0.5s;
}

/* .bg-div {
    height: 50px;
    width: 50px;
    border-radius: 50%; 
    background-color: grey;
} */

.badge:hover { 
    transition: all 0.5s;
    box-shadow: 2px 2px 5px rgb(179, 179, 179);

}
</style>