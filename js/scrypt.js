$('#scene').parallax();
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY >= $(window).height()){ 
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


      