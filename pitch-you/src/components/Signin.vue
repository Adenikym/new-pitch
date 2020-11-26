<template>
  
       <div style="width:100%;" >
    

        <div style="width:100%;" id="myCarousel" class="carousel slide " data-ride="carousel"
        >

        <ol class="carousel-indicators">

            <li data-target="#myCarousel"
            data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel"
            data-slide-to="1"></li>
             <li data-target="#myCarousel"
            data-slide-to="2"></li>
          
        </ol>
  
  <div style="font-family: 'Montserrat', sans-serif;" class="carousel-inner">

   <div class="carousel-item active first">


    <p class="text">ARE YOU A STUDENT IN NEED AND SEARCHING FOR FUNDS TO KICKSTART YOUR CAREER OR RESEARCH ?</p>

   

   </div>

   <div class="carousel-item second" >

<p class="text" >TAKE TEST, GET RANK & RATING,
APPLY TO GET VISIBLE BY SPONSORS</p>

   </div>

    <div class="carousel-item third" >
       
<p style="color:black;" class="text">GET OFFER!</p>

   </div>

   

</div>


<a href="#myCarousel" class="carousel-control-prev" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
</a>

<a href="#myCarousel" class="carousel-control-next" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
</a>
   </div>
   
   </div>

  

   
</template>



<script>
export default {
    name:'sign'
}
</script>

<style scoped>

    .carousel-item{
       height: 40rem;
       width:100%;
       color:white;
       background-size: cover;
    }

    .text{
        width:25%;
        text-align: left;
        margin-top: 300px ;
        margin-left:5% ;
    }

    .first{
        background-image: url("../assets/background1.svg") ;

    }

    .second{
 background-image: url("../assets/background2.svg") ;
    }

    .third{
        background-image: url("../assets/background3.svg") ;
    }
</style>