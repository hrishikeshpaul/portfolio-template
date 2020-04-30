<template>
    <div style="overflow: auto;">
        <div class="prow"> 
            <div class="pcolumn" v-for="i in images" :key="i" >
                <img :src="i" style="width:100%">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    props: {
        images: {
            type: Array
        }
    }
}
</script>

<style scoped>

.prow {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.pcolumn {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
  max-width: 50%;
  padding: 0 4px;
}

.pcolumn img {
  border-radius: 5px;
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .pcolumn {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .pcolumn {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>