$(document).ready(function(){

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.header_wrapper').addClass("header_small");
    }
    else {
        $('.header_wrapper').removeClass("header_small");
    }
});

$(function () {
    var location = window.location.href;
    var cur_url = '../DLproduct/' + location.split('/').pop();

    $('.navigation_links').each(function () {
        var link = $(this).find('a').attr('href');

        if (cur_url == link) {
            $(this).addClass('active');
        }
    });
});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline="february 14 2020 00:00:00 GMT+0300"; //for Ukraine
initializeClock('countdown', deadline);


var owl = $(".owl-carousel");
owl.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


});
