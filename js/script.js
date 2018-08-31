/**
 * Created by koste on 01.06.2016.
 */

//NAV FIXED
/*var h_hght = 400;
var h_mrg = 0;

$(function(){

    var elem = $('#top_nav');
    var top = $(this).scrollTop();

    if(top > h_hght){
        elem.css('top', h_mrg);
    }

    $(window).scroll(function(){
        top = $(this).scrollTop();

        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
    $("#bs-example-navbar-collapse-2").on("click", "a", function(event){
        $('#bs-example-navbar-collapse-2').collapse('hide');
       // event.preventDefault();
    });

});*/
$(document).ready(function(){
  $(window).bind('scroll', function() {
    var navHeight = $("#top_nav").height();
    ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');
  });
  $("#bs-example-navbar-collapse-2").on("click", "a", function(event) {
    $('#bs-example-navbar-collapse-2').collapse('hide');
  });
});
