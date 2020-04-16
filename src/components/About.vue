<template>
    <div class="bg-light py-4">
        <div class="container">
            <p class="title pgray text-center">about me.</p>
            <hr width="50%" />
            <div class="row">
                <div class="col-xl-6 col-sm-12">
                    <Timeline :data="education"/>
                </div>
                <div class="col-xl-6 col-sm-12">
                    <Timeline :data="experience"/>
                </div>
            </div>

            <p class="title pgray text-center">skills</p>
            <hr width="50%" />
        </div>
    </div>
</template>

<script>
import Timeline from './helpers/Timeline'
import info from '../../info'

export default {
    name: 'About',
    components: {
        Timeline
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
    font-weight: 800;
}
</style>