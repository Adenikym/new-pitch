<template>

  <nav style="font-family: 'Ubuntu', sans-serif;font-size:1.2rem;" class=" navbar navbar-expand-lg">
       <div class="logo mt-2">
          <img src="../assets/site-logo.svg" alt="">
      </div>
        <button  class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span  class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
<ul class="navbar-nav mt-4" v-for="nav in Nav" :key="nav.key">
    <li class="nav-item">
     <a href="" class="nav-link">{{nav.item}}</a></li>
</ul>
</div>
  </nav>

</template>



<script>
export default {
    name:'navbar',
    data() {
        return {
            Nav:[
                {
                    item:"Home", key:1
                },

              {
                    item:"Dashboard", key:2
                } ,
                 {
                    item:"Sponsors", key:3
                },
                 {
                    item:"PRO ACCESS", key:4
                }     
            ]
        }
    },
}
</script>


<style scoped>

.logo{
         margin-left:5%;
   } 

    a, li{
        color:white;
        font-weight: 500;
    }

    ul{
  
      margin-left: 10%;
    }

   
</style>