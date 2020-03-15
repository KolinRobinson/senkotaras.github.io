var lastId,
    menuHeader = $('header'),
    mainMenu = $('.header-wrapper__nav'),
    menuItems = mainMenu.find("a"),
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
        }),
    topMenuHeight = menuHeader.outerHeight()+15;

$(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        fade: true,
        autoplay: 3000,
        appendArrows: $('.slider'),
        prevArrow: `<span class="slick-prev"></span>`,
        nextArrow: `<span class="slick-next"></span>`
    });

    var menuBtn = $('#burger');
    menuBtn.click(
        function(){
            this.className = (this.className == 'burger' ? 'close-burger' : 'burger')
            if(this.className == 'burger'){
                menuHeader.removeClass("header-active");
                $("nav").removeClass("header-wrapper_nav--active");
                $("body").removeClass("fixed");
            } else {
                menuHeader.addClass("header-active");
                $("nav").addClass("header-wrapper_nav--active");
                $('body').addClass('fixed');
            }
        });

        $(".header-wrapper__nav ul li a").click(function (event) {
                menuHeader.removeClass("header-active");
                $("nav").removeClass("header-wrapper_nav--active");
                $("body").removeClass("fixed");
                menuBtn.removeClass('close-burger');
                menuBtn.addClass('burger');
            });

        $(window).scroll(function() {
            var height = $(window).scrollTop();
            if(height > 560){
            $('header').addClass('header-active__show');
            $('#logo').addClass('logo-show');
            $('.arrow-home').addClass('arrow-home_active');
            } else{
            $('header').removeClass('header-active__show');
            $('#logo').removeClass('logo-show');
            $('.arrow-home').removeClass('arrow-home_active');
            }
        });

        var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
            return false;
        });


    
        
        $(window).scroll(function(){
            var fromTop = $(this).scrollTop()+topMenuHeight;

            var cur = scrollItems.map(function(){
                if ($(this).offset().top < fromTop)
                return this;
            });
            
            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";
                
            if (lastId !== id) {
                lastId = id;

                menuItems
                    .parent().removeClass("menu__active")
                    .end().filter("[href='#"+id+"']").parent().addClass("menu__active");
            } 
        });

});