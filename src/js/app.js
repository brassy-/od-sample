$(document).foundation();

var menuTrigger = $('.main-nav__trigger'),
    menu = $('.main-nav');

    menuTrigger.on('click', function(){
        menu.toggleClass('main-nav--open')
    });
