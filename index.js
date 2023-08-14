console.log

$(document).ready(function() {
    $('#scrollDown').click(function() {
         $('html, body').animate({
              scrollTop: $('#scrollTo').offset().top
         }, 500); 
    });
});