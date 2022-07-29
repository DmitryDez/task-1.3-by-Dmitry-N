import {overlay} from './overlay.js';

let modalCall = document.querySelector('.order-call-modal');
let btnCall = document.getElementById('btnCall');
let btnCloseOrderCallModal =  document.getElementById('btnCloseOrderCallModal');

btnCall.addEventListener("click", toggleCallModal);
btnCloseOrderCallModal.addEventListener("click", toggleCallModal);

function toggleCallModal(){
  if(modalCall.classList.contains('order-call-modal--invisible')){
    modalCall.classList.toggle('order-call-modal--invisible');
    overlay.removeAttribute('hidden');
    document.body.style.overflowY = 'hidden';
  } else{
    modalCall.classList.toggle('order-call-modal--invisible');
    overlay.setAttribute('hidden', 'hidden');
    document.body.style.overflowY = '';
  }
}

export {modalCall, btnCall, btnCloseOrderCallModal, toggleCallModal};
