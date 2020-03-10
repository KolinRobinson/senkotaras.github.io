jQuery(document).ready(function($) {

$(document).ready(function () {
  $("main").onepage_scroll({
    sectionContainer: "section",
    updateURL:  true,
    loop: true,
    responsiveFallback: 600
  });

});




$('.owl-carousel').owlCarousel({
  loop:true,
  margin: 0,
  nav:true,
  items: 1
});



  var bodyWidth = $('body').width();
  if (bodyWidth < 600) {
      let linkMenu = document.querySelectorAll('.nav_link');
      linkMenu[0].href = '#home';
      linkMenu[1].href = '#about';
      linkMenu[2].href = '#portfolio';
      linkMenu[3].href = '#blog';
      linkMenu[4].href = '#contacts';
  } 
  




});