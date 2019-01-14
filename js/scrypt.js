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
  var val = document.getElementById('email');
  if(val.value == ""){
    val.setCustomValidity("Enter a Valid Email");
  }
  else{
    alert("Thank you for your input the brochure will be sent to your Email-Id")
  }
  
}


// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset ) {
        $animatable.removeClass('animatable').addClass('animated');
      }
     
    });

  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})

$(window).scroll(function() {
    if ($(this).scrollTop() >= ($(document).height() - $(window).height()) ) {
        $('.signature:hidden').stop(true, true).fadeIn();
    } else {
        $('.signature').stop(true, true).fadeOut();
    }
});



// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


$("#learnmore").on("click",function(){
        $('html,body').animate({
        scrollTop: $("#section2").offset().top-100},
        'slow');
})