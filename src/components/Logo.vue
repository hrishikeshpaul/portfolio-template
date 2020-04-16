<template>
    <div>
        <span class="logo-title-name pgray">{{name}}</span>
        <span class="logo-title-dot pblue">{{dot}}</span>
    </div>
</template>

<script>
export default {
    name: "Logo",
    data () {
        return {
            name: "paul",
            dot: '.'
        }
    }
}
</script>

<style scoped>
.logo-title-name {
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1px;
}

.logo-title-dot {
    font-size: 30px;
    font-weight: 900;
}

</style>