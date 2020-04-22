<template>
    <div class="container py-4">
        <p class="title pgray text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000" >skills.</p>
            <hr width="50%" />
            <br />
        <div class="row">
            <div 
                class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4" 
                v-for="(skill, idx) in skills" 
                :key="skill.title" 
                data-aos="fade-up"
                data-aos-offset="10"
                data-aos-delay="30"
                :style="{'transition-delay': idx/4.2+'s'}"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
            >
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

.fa { 
    color: rgb(212, 149, 97);
    font-size: 40px;
    /* font-weight: bold; */
    transition: all 0.5s;
}

.fas { 
    color:  rgb(212, 149, 97);
    font-size: 40px;
    /* font-weight: bold; */
    transition: all 0.5s;
}

</style>