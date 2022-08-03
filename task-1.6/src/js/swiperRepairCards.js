import Swiper, {Pagination, Keyboard, Manipulation} from 'swiper';

let swiperRepairCardsElement = document.querySelector('.swiper.swiper-2');

 window.addEventListener('load', swiperRepairCardsMode);

 function swiperRepairCardsMode(){
   if (window.matchMedia('(max-width: 767px)').matches) {
     let swiperRepairCards = new Swiper('.swiper-2', {
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
         el: '.sw-pag-2',
         clickable: true,
         type: 'bullets',
       },
       init: true
     })
   } else {
     let swiperRepairCards = new Swiper('.swiper-2', {
       modules: [Manipulation],
     })
     swiperRepairCards.removeAllSlides();
     swiperRepairCards.disable();
     swiperRepairCardsElement.classList.toggle('swiper--destroy');
   }
 }

export {swiperRepairCardsMode};
