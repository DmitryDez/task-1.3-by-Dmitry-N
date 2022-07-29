import {overlay} from './overlay.js';

let modalMenu = document.querySelector('.modal-menu');

let btnMenuM  = document.getElementById('btnMenu-m');
let btnMenuSM = document.getElementById('btnMenu-sm');
let btnCloseMenuModal  = document.getElementById('btnCloseMenuModal');

btnMenuM.addEventListener("click", toggleMenuModal);
btnMenuSM.addEventListener("click", toggleMenuModal);
btnCloseMenuModal.addEventListener("click", toggleMenuModal);

function toggleMenuModal(){
  if(!modalMenu.classList.contains('modal-menu--visible')){
    modalMenu.classList.toggle('modal-menu--visible');
    document.body.style.overflowY = 'hidden';
    overlay.removeAttribute('hidden', 'hidden');
  } else {
    modalMenu.classList.toggle('modal-menu--visible');
    document.body.style.overflowY = '';
    overlay.setAttribute('hidden', 'hidden');
  }
}

export {modalMenu, btnMenuM, btnMenuSM, btnCloseMenuModal, toggleMenuModal};
