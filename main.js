$(document).ready(function(){
   $(".owl-carousel").owlCarousel();
 });

 $('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   responsiveClass:true,
   responsive:{
       1000:{
           items:8,
           nav:true,
           loop:false
       }
   }
})