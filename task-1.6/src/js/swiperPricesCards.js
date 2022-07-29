import Swiper, {Pagination, Keyboard, Manipulation} from 'swiper';

let swiperPricesCardsElement = document.querySelector('.swiper.swiper-3');

 window.addEventListener('load', swiperPricesCardsMode);

 function swiperPricesCardsMode(){
   let swiperPricesCards = new Swiper('.swiper-3', {
     modules: [Manipulation],
   })
   if (window.matchMedia('(max-width: 767px)').matches) {
     swiperPricesCards = new Swiper('.swiper-3', {
       modules: [Pagination, Keyboard, Manipulation],
       direction: 'horizontal',
       loop: false,
       spaceBetween: 15,
       slidesPerView: 1.3,
       grabCursor: true,
       speed: 600,
       keyboard: {
         enabled: true,
         pageUpDown: true,
       },
       pagination: {
         el: '.sw-pag-3',
         clickable: true,
         type: 'bullets',
       },
       debugger: true,
       init: true
     })
   } else {
     swiperPricesCards.removeAllSlides();
     swiperPricesCards.disable();
     swiperPricesCardsElement.classList.toggle('swiper--destroy');
   }
 }

export {swiperPricesCardsMode};
