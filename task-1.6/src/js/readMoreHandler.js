let btnReadMore   = document.querySelector('#btnReadMore');
btnReadMore.addEventListener('click', readMoreHandler);

function readMoreHandler(){
  let aboutFulltext = document.querySelector('.about__full-text');
  if(aboutFulltext.classList.contains('about__full-text--invisible')){
    aboutFulltext.classList.toggle('about__full-text--invisible');
    btnReadMore.classList.remove('about__btn--more-text');
    btnReadMore.classList.add('about__btn--less-text');
    btnReadMore.innerHTML = 'Скрыть';
  } else {
    aboutFulltext.classList.toggle('about__full-text--invisible');
    btnReadMore.classList.remove('about__btn--less-text');
    btnReadMore.classList.add('about__btn--more-text');
    btnReadMore.innerHTML = 'Читать далее';
  }
}

export {btnReadMore, readMoreHandler};
