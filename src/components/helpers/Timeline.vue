<template>
    <div>
        <div class="mx-3 mt-3 mb-5">
            <div class="row">
                <div class="col-xl-12 col-bg-12 col-sm-6">
                    <p class="title1">{{data.title}}</p>
                    <ul class="timeline m-0 pt-1" v-for="e in data.data" :key="e.name">
                        <li class="m-0 pb-2">
                            <div style="">
                                <div class="px-2 title2">{{e.name}}, {{e.place}}</div>
                                <div class="px-2 title3">{{e.degree || e.position}} {{e.gpa ? '(' + e.gpa + ')' : ''}}</div>
                                <div class="px-2 date">{{e.date}}</div>
                                <br />
                                <div class="px-2 pb-2" style="text-align: justify;">{{e.description}}</div>
                                <span class="mx-2 badge p-2 mb-2" v-for="s in e.skills" :key="s">{{s}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Timeline',
    props: {
        data: {
            type: Object
        }
    }
}
</script>

<style scoped>
.title1 {
    font-size: 24px;
    font-weight: 800;
}

.title2 {
    font-size: 20px;
    font-weight: 600;
}

.title3 {
    font-size: 16px;
    font-weight: 600;
}

.badge { 
    background-color: rgb(211, 227, 233);
}

.date {
    font-size: 14px;
    font-weight: 500;
}

ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #669DB3FF;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
</style>