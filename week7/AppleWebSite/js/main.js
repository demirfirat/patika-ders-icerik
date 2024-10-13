//carousel kullanımı
(function(){
    'use strict';

    AOS.init({
        startEvent: 'load',
        offset: 20,
        once: true,
    }); 

    var camera = new Swiper('#camera .swiper', {
        speed: 600,
        spaceBetween: 12,
        navigation:{
            enabled: true,
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }
    });
    
    //videoyu pop-up açma
    var gLightbox = GLightbox({
        selector: '.glightbox',
    })

    //photos kullanımı
    var photos = GLightbox({
        selector: '#photos .photo',
    })
    //swiper kullanımı
    var comment = new Swiper('#comments .swiper',{
        pagination:{
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        }
    });
    


//header blurlama
var header = document.getElementById('header');

var headerScrolled = function() {
 if (window.scrollY > 100){
    header.classList.add('header-scrolled');
 } else{
    header.classList.remove('header-scrolled');
 }
}
window.addEventListener('load', headerScrolled);
document.addEventListener('scroll', headerScrolled);

//scrollto, yazılan fonksiyonda kaydırma eventini daha düzgün ve headerin sectiona orantısını hesaplayamasını sağlayan bir veri elde ettik.
var links = document.getElementsByClassName('scrollto');
var focusSectionLink = function(event){
    for (const link of links){
        var id = link.hash.slice(1);
        var section = document.getElementById(id);
        var position = window.scrollY + (window.innerHeight /2);
        
        if (position >= section.offsetTop && position <=(section.offsetTop + section.offsetHeight)){
            link.ariaCurrent = 'page';
            link.classList.add('active');
        } else{
            link.ariaCurrent = null;
            link.classList.remove('active');
        }
    }
}
var focusSection = function(event){
    event.preventDefault();
    var id = event.target.hash.slice(1);
    var section = document.getElementById(id);
    if(section){
        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth',
        })
    }
}

window.addEventListener('scroll', focusSectionLink)

for (const link of links) {
    link.addEventListener('click', focusSection)
}
})();
