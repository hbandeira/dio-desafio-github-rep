$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1 /*When the screen is up to 599, display only 01 poster*/ 
      },
      600:{
          items:2 /*When the screen is 600px to 999px, display up to 02 posters*/ 
      },
      1000:{ /*When the screen is 1k or more pixels, display up to 5 posters*/ 
          items:5
      }
  }
})