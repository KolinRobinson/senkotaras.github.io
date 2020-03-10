$(document).ready(function () {
    $('.left_block_wrapper').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1300

    });
$('.button_burger').on('click', function () {
    var burgerButton = $('.button_burger span:first-child'),
        burgerSpan = $('.button_burger span');
        $('.button_burger').toggleClass('click')
    if($('.button_burger').hasClass('click')){
        $('.menu_right_block.mobile').css('right','0')
        $('.button_burger').css('background-color','rgba(22,28,36,0)')
        burgerSpan.css('transform', 'translateX(-200px)')
        //$('.button_burger span:nth-child(4)').css('transform', 'translateX(-50px)')
        //$('.button_burger span:nth-child(5)').css('transform', 'translateX(-50px)')
        $('.button_burger span:nth-child(4)').css('transform', 'rotate(45deg)')
        $('.button_burger span:nth-child(5)').css('transform', 'rotate(-45deg)')
    }else{
        burgerSpan.css('transform', 'translateX(0)')
        $('.menu_right_block.mobile').css('right','-500px')
        $('.button_burger').css('background-color','rgba(22,28,36,1)')
    }
    })
    $('.certificate_block').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 1300,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $("#menu").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#menu_mobile").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $(window).scroll(function () {
        var windowPosition = $(this).scrollTop();
        if(windowPosition == 0){
            $('.button_scroll_top').css('display', 'none')


        }else{
            $('.button_scroll_top').css('display', 'block')
        }
    })
    $("#section_first").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#section_two").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#section_three").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#section_four").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#production_item_result").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#footer").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $('.certificate_block').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
    $('.img_prod').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 1300,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            700:{
                items:3
            },
        }
    })
    $('.img_prod').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
    $('.production_item.menu_smart').on('click',function () {
        $('.production_item :before').css('width','60px')
        $('.production_item_result__wrapper.smart').css('display','flex')
        $('.production_item_result__wrapper.bushel').css('display','none')
        $('.production_item_result__wrapper.present').css('display','none')
    });
    $('.production_item.menu_bushel').on('click',function () {
        $('.production_item_result__wrapper.smart').css('display','none')
        $('.production_item_result__wrapper.bushel').css('display','flex')
        $('.production_item_result__wrapper.present').css('display','none')
    });
    $('.production_item.menu_present').on('click',function () {
        $('.production_item_result__wrapper.smart').css('display','none')
        $('.production_item_result__wrapper.bushel').css('display','none')
        $('.production_item_result__wrapper.present').css('display','flex')
    });
    $('.production_item.menu_shamp').on('click',function () {
        $('.production_item_result__wrapper.shamp').css('display','flex')
        $('.production_item_result__wrapper.burg').css('display','none')
        $('.production_item_result__wrapper.alz').css('display','none')
        $('.production_item_result__wrapper.bordo').css('display','none')
    });
    $('.production_item.menu_burg').on('click',function () {
        $('.production_item_result__wrapper.shamp').css('display','none')
        $('.production_item_result__wrapper.burg').css('display','flex')
        $('.production_item_result__wrapper.alz').css('display','none')
        $('.production_item_result__wrapper.bordo').css('display','none')
    });
    $('.production_item.menu_alz').on('click',function () {
        $('.production_item_result__wrapper.shamp').css('display','none')
        $('.production_item_result__wrapper.burg').css('display','none')
        $('.production_item_result__wrapper.alz').css('display','flex')
        $('.production_item_result__wrapper.bordo').css('display','none')
    });
    $('.production_item.menu_bordo').on('click',function () {
        $('.production_item_result__wrapper.shamp').css('display','none')
        $('.production_item_result__wrapper.burg').css('display','none')
        $('.production_item_result__wrapper.alz').css('display','none')
        $('.production_item_result__wrapper.bordo').css('display','flex')
    })


})