<template>
    <div class="py-4" :class="{'bg-light': !nightMode, 'bg-dark2': nightMode, 'text-light': nightMode}">
        <div class="container">
            <div class="text-center">
                <span class="title text-center" :class="{'pgray': !nightMode, 'text-light': nightMode}">about me.</span>
            </div>
            <hr width="50%" />
            <div class="row">
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
                    <Timeline :data="education"/>
                </div>
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
                    <Timeline :data="experience"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Timeline from './helpers/Timeline'
import info from '../../info'

export default {
    name: 'About',
    components: {
        Timeline,
    },
    props: {
        nightMode: {
            type: Boolean
        }
    },
    data() { 
        return {
            education: {
                title: 'education',
                data: info.education
            },
            experience: {
                title: 'experiences',
                data: info.experience
            }
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 30px;
    font-weight: 500;
}
</style>