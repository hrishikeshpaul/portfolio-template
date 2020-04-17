<template>
    <div class="container py-4">
        <p class="title pgray text-center">recommendations.</p>
            <hr width="50%" />
        <div class="row">
            <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 py-3 px-5" v-for="d in data" :key="d.author">
                <div class="title2">
                    <span>"{{d.title}}"</span>
                </div>
                <div class="title3 float-right py-2 pl-5">
                    <span> – {{d.author}}, {{d.position}}, {{d.company}}, {{d.location}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import info from '../../info'
export default {
    name: 'Recommendation',
    data () {
        return {
            data: info.recommendations
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
    font-style: italic;
    text-align: justify;
}

.title3 {
    opacity: 0.7;
    font-size: 16px;
    font-weight: 400;
    text-align: right;
}
</style>