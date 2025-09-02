function onScroll() {
    if (scrollY > 0) {
        navegation.classList.add('scroll')
    } 
    else {
        navegation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

function setTopo(){
    $(window).scrollTop(0);
}
$(window).bind('scroll', setTopo);