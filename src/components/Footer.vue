<template>
    <div class="bg-secondary">
        <div class="container py-3">
            <div class="row pt-3 align-items-center">
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow" style="color: white;">
                    <span>© 2020 Copyright: Hrishikesh Paul</span>
                </div>

                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
                     <div class='text-center'>
                        <button class="btn btn-outline-secondary mx-2 " @click="open('linkedin')"><i class="fab fa-linkedin"></i></button>
                        <button class="btn btn-outline-secondary mx-2" @click="open('github')"><i class="fab fa-github"></i></button>
                        <button class="btn btn-outline-secondary mx-2" @click="open('angellist')"><i class="fab fa-angellist"></i></button>
                        <button class="btn btn-outline-secondary mx-2" @click="open('resume')"><i class="fa fa-file"></i></button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
span {
    font-weight: 500;
}

.btn {
    border-color: white;
    color: white;
}

.btn:hover {
    background-color: white;
    border-color: white;
    color: gray;
}

.btn:focus {
    background-color: white;
    border-color: white;
    color: gray;
}

@media screen and (max-width: 400px){
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>