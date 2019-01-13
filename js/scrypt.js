$('#scene').parallax();
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY >= 100){ 
    nav.className = 'navbar navbar-expand-lg navbar-dark bg-new fixed-top';
    }
   else{ 
    nav.className = 'navbar navbar-expand-lg navbar-dark transparent';
  }
};





     

$(document).ready
      (
        function()
        {
          $('.labelMenu').click
          (
            function()
            {
               $('.menu').css('left', 0);
               $('.opacMenu').fadeIn();
            }
          )
          
          $('.opacMenu').click
          (
            function()
            {
               $('.menu').css('left', '-205px');
               $('.opacMenu').fadeOut();
            }
          )
        }
      )


$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 1000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});



$(function () {
  $('div[id*="biziqrecentreviews-"]').css("visibility", "visible").addClass('swiper-wrapper').wrap('<div class="swiper-container"></div>').after('<div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div>');
  $('.biziq-review').addClass('swiper-slide');
});

$(function () {
  var time = 8000;
  var swiper = new Swiper('.swiper-container', {
      spaceBetween: 0, // this changes the width between the slides
      centeredSlides: true,
      loop: true,
      effect: 'slide', // this sets animation type: "slide", "fade", "cube", "coverflow" or "flip"
      autoplay: {
        delay: time,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }); 
});

function formFilled(){
  alert("Thank you for your input the brochure will be sent to your Email-Id")
}