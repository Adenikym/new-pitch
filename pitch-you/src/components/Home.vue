<template>
    <div class="wrap">
<navbar></navbar>

    </div>
</template>


<script>
import navbar from './Nav'
export default {
    name:'home',
    components:{
navbar
    }
}
</script>



<style scoped>
    .wrap{
        background-image: url("../assets/home.svg");
  background-size: cover;
      height:50em;
    }
</style>