let toggleBtnBrandsCards = document.querySelector('.control-button__btn');
toggleBtnBrandsCards.innerHTML = toggleBtnBrandsCards.innerHTML.trim();

toggleBtnBrandsCards.addEventListener('click', toggleBtnClickBrandsCards);

let brandsList = document.querySelectorAll('.brands__card');

function toggleBtnClickBrandsCards() {
  let amountCardsDefault = 6;
  if(toggleBtnBrandsCards.innerHTML === 'Показать все'){
    showBrandsCards(amountCardsDefault);
    toggleBtnBrandsCards.parentNode.style.marginTop = '10px';
  } else {
    hideBrandsCards(amountCardsDefault);
    toggleBtnBrandsCards.parentNode.style.marginTop = '-10px';
  }
  changeToggleBtnBrandsCards();
}

function hideBrandsCards(amountCardsDefault){
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

function showBrandsCards(amountCardsDefault){
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

function changeToggleBtnBrandsCards(){
  if(toggleBtnBrandsCards.innerHTML === 'Показать все'){
    toggleBtnBrandsCards.innerHTML = "Скрыть";
    toggleBtnBrandsCards.classList.toggle('control-button__btn--show-mode');
    toggleBtnBrandsCards.classList.toggle('control-button__btn--hide-mode');
  } else {
    toggleBtnBrandsCards.innerHTML = "Показать все";
    toggleBtnBrandsCards.classList.toggle('control-button__btn--show-mode');
    toggleBtnBrandsCards.classList.toggle('control-button__btn--hide-mode');
  }
}

export {toggleBtnBrandsCards, brandsList, toggleBtnClickBrandsCards,
showBrandsCards, hideBrandsCards, changeToggleBtnBrandsCards};
