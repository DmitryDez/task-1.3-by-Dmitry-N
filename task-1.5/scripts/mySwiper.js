let swiper = new Swiper('.swiper');
let init = false;

let slideNeedToHide = document.querySelector('.swiper .sw-sl-br-card:first-child');
slideNeedToHide.classList.add('hideThisSlide');

 function swiperMode() {   
   let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");

   if (mobile.matches) {
     if (!init) {
       init = true;
       swiper = new Swiper('.swiper', {
         slidesPerView: 1.3,
         spaceBetween: 15,
         slidesOffsetBefore: 15,
         grabCursor: true,
         loop: false,
         speed: 600,
         keyboard: {
           enabled: true,
         },
         pagination: {
           el: ".swiper-pagination",
           clickable: true,
         },
       });
     }

     slideNeedToHide.classList.remove('hideThisSlide');

   } else {
     swiper.destroy();
     init = false;

     slideNeedToHide.classList.add('hideThisSlide');
   }
 }

 window.addEventListener("resize", function () {
   swiperMode();
 });

 window.addEventListener("load", function () {
   swiperMode();
 });
