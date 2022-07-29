let toggleBtnRepairCards = document.querySelectorAll('.control-button__btn')[1];
toggleBtnRepairCards.innerHTML = toggleBtnRepairCards.innerHTML.trim();

toggleBtnRepairCards.addEventListener('click', toggleBtnClickRepairCards);

let repairCardsList = document.querySelectorAll('.repair-cards__card');

function toggleBtnClickRepairCards() {
  let amountRepairCardsDefault = 4;
  if(toggleBtnRepairCards.innerHTML === 'Показать все'){
    showRepairCards(amountRepairCardsDefault);
  } else {
    hideRepairCards(amountRepairCardsDefault);
  }
  changeToggleBtnRepairCards();
}

function hideRepairCards(amountRepairCardsDefault){
  let cardBtn;
  let cardTitle;

  for(let i = repairCardsList.length-1; i >= amountRepairCardsDefault; i--){
    repairCardsList[i].classList.add('hideElem');

    repairCardsList[i].style.opacity = 0;
    repairCardsList[i].style.height  = 0;
    repairCardsList[i].style.border  = 'none';

    cardBtn = repairCardsList[i].querySelector('button');
    cardBtn.style.display = 'none';

    cardTitle = repairCardsList[i].querySelector('.repair-cards__title');
    cardTitle.style.margin  = 0;
    cardTitle.style.opacity = 0;
  }
}

function showRepairCards(amountRepairCardsDefault){
  let cardBtn;
  let cardTitle;

  for(let i = repairCardsList.length-1; i >= amountRepairCardsDefault; i--){
    repairCardsList[i].classList.remove('hideElem');
    repairCardsList[i].style.opacity = '';
    repairCardsList[i].style.height  = '';
    repairCardsList[i].style.border  = '';

    cardBtn = repairCardsList[i].querySelector('button');
    cardBtn.style.display = '';

    cardTitle = repairCardsList[i].querySelector('.repair-cards__title');
    cardTitle.style.margin  = '';
    cardTitle.style.opacity = '';
  }
}

function changeToggleBtnRepairCards(){
  if(toggleBtnRepairCards.innerHTML === 'Показать все'){
    toggleBtnRepairCards.innerHTML = "Скрыть";
    toggleBtnRepairCards.classList.toggle('control-button__btn--show-mode-2');
    toggleBtnRepairCards.classList.toggle('control-button__btn--hide-mode-2');
  } else {
    toggleBtnRepairCards.innerHTML = "Показать все";
    toggleBtnRepairCards.classList.toggle('control-button__btn--show-mode-2');
    toggleBtnRepairCards.classList.toggle('control-button__btn--hide-mode-2');
  }
}


export {toggleBtnRepairCards, repairCardsList, toggleBtnClickRepairCards,
showRepairCards, hideRepairCards, changeToggleBtnRepairCards};
