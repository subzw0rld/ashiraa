var resetHeroMenu = function () {
    $('.hero-menu').fadeOut(800);
    $('.hero-menu-subitem').fadeOut(800);
}

var resetSlider = function () {
    $('.swiper-container,.swiper-pagination').hide();
}

var showSlider = function () {
    $('.swiper-container,.swiper-pagination').show();
}

function init() {
    var splashImageYPos = ($(document).height() - $('#splash-bg').height()) / 2;
    var logoLeft = ($('.splash-wrapper').width() - $('.enter-text').width()) / 2;
    var logoTop = ($('#splash-bg').height() - $('.enter-text').height()) / 2 + splashImageYPos;
    splashImageYPos = Math.floor(splashImageYPos);

    if (!window.localStorage.showSplash) {
        window.localStorage.showSplash = true;
    }

    //console.info(window.localStorage.showSplash);
    if (window.localStorage.showSplash === "false") {
        $('.splash-wrapper').hide();
        $('.wrapper,footer').show();
    }

    $('#splash-bg').css({
        "top": splashImageYPos
    });

    $('.enter-text').css({
        "left": logoLeft,
        "top": logoTop
    });

    $('.enter-text').fadeIn(5000);

    $('.enter-text>a').on('click', showHomePage);

    var swiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    
    $('.fancybox').fancybox({
        "transitionIn": "elastic",
        "transitionOut": "elastic",
        "easingIn": "easeOutBack",
        "easingOut": "easeInBack",
        "scrolling": "no"
    });

    function showHomePage() {
        window.localStorage.showSplash = false;
        $('.splash-wrapper').fadeOut(2000);
        $('.wrapper,footer').fadeIn(2000);
    };
};

init();


$('[data-submenu]').on('click', function (e) {
    var hasSubMenu = $(this).attr('data-submenu').toLowerCase() === 'yes' || $(this).attr('data-submenu').toLowerCase() === 'true';
    $('.hero-menu-subitem').fadeOut('slow');
    if (hasSubMenu) {
        $(this).next().fadeToggle('slow', 'linear');
    }
});