let toggleBtn = document.querySelector('.control-button__btn');
toggleBtn.innerHTML = toggleBtn.innerHTML.trim();

toggleBtn.addEventListener('click', toggleBtnClick);

let brandsList = document.querySelectorAll('.brands__card');



let amountCardsDefault = 6;

function toggleBtnClick() {
  if(toggleBtn.innerHTML === 'Показать все'){
    showCards(amountCardsDefault);
    toggleBtn.parentNode.style.marginTop = '10px';
  } else {
    hideCards(amountCardsDefault);
    toggleBtn.parentNode.style.marginTop = '-10px';
  }
  changeToggleBtn();
}


function changeToggleBtn(){
  if(toggleBtn.innerHTML === 'Показать все'){
    toggleBtn.innerHTML = "Скрыть";
    toggleBtn.classList.toggle('control-button__btn--show-mode');
    toggleBtn.classList.toggle('control-button__btn--hide-mode');
  } else {
    toggleBtn.innerHTML = "Показать все";
    toggleBtn.classList.toggle('control-button__btn--show-mode');
    toggleBtn.classList.toggle('control-button__btn--hide-mode');
  }
}

function hideCards(amountCardsDefault){
  let img;
  let btn;

  for(let i = brandsList.length-1; i >= amountCardsDefault; i--){
    brandsList[i].classList.add('hideElem');

    brandsList[i].style.opacity = 0;
    brandsList[i].style.height  = 0;
    brandsList[i].style.border  = 'none';

    img = brandsList[i].querySelector('img');
    btn = brandsList[i].querySelector('button');

    img.style.display = 'none';
    btn.style.display = 'none';
  }
}

function showCards(amountCardsDefault){
  let img;
  let btn;

  for(let i = brandsList.length-1; i >= amountCardsDefault; i--){
    brandsList[i].classList.remove('hideElem');
    brandsList[i].style.opacity = '';
    brandsList[i].style.height  = '';
    brandsList[i].style.border  = '';

    img = brandsList[i].querySelector('img');
    btn = brandsList[i].querySelector('button');

    img.style.display = '';
    btn.style.display = '';
  }
}
