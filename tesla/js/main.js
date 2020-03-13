$(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: 3000
    });

    var menuBtn = $('#menu-btn'),
        menuNav = $('nav');
    console.log(menuNav.attr('display'));
    menuBtn.click(
        function(){
            this.className = (this.className == 'header-btn' ? 'close-btn' : 'header-btn')
            if(this.className == 'header-btn'){
                menuNav.removeClass("menu-active");
                $("body").removeClass("fixed");
                $("header").addClass("myIndex");
            } else {
                menuNav.addClass("menu-active");
                $("body").addClass("fixed");
                $("header").addClass("myIndex");
            }
        });
});