import Swiper, {Pagination, Keyboard, Manipulation} from 'swiper';

let swiperBrandsCardsElement = document.querySelector('.swiper.swiper-1');

 window.addEventListener('load', swiperBrandsCardsMode);

 function swiperBrandsCardsMode(){
   let swiperBrandsCards = new Swiper('.swiper-1', {
     modules: [Manipulation],
   })
   if (window.matchMedia('(max-width: 767px)').matches) {
     swiperBrandsCards = new Swiper('.swiper-1', {
       modules: [Pagination, Keyboard, Manipulation],
       direction: 'horizontal',
       loop: false,
       spaceBetween: 15,
       slidesPerView: 1.3,
       grabCursor: true,
       speed: 600,
       keyboard: {
         enabled: true,
       },
       pagination: {
         el: '.sw-pag-1',
         clickable: true,
         type: 'bullets',
       },
       debugger: true,
       init: true
     })
   } else {
     swiperBrandsCards.removeAllSlides();
     swiperBrandsCards.disable();
     swiperBrandsCardsElement.classList.toggle('swiper--destroy');
   }
 }

export {swiperBrandsCardsMode};
