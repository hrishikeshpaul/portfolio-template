<template>
    <div>
        <span class="logo-title-name pgray">{{name}}</span>
        <span class="logo-title-dot pblue">{{dot}}</span>
    </div>
</template>

<script>
import info from '../../../info'

export default {
    name: "Logo",
    data () {
        return {
            name: info.logo_name,
            dot: '.'
        }
    }
}
</script>

<style scoped>
.logo-title-name {
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 1px;
}

.logo-title-dot {
    font-size: 30px;
    font-weight: 700;
}

</style>