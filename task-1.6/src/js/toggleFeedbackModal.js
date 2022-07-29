import {overlay} from './overlay.js';

let modalChat = document.querySelector('.feedback-modal');
let btnChat   = document.getElementById('btnChat');
let btnCloseFeedbackModal =  document.getElementById('btnCloseFeedbackModal');

btnChat.addEventListener("click", toggleChatModal);
btnCloseFeedbackModal.addEventListener("click", toggleChatModal);

function toggleChatModal(){
  if(modalChat.classList.contains('feedback-modal--invisible')){
    modalChat.classList.toggle('feedback-modal--invisible');
    overlay.removeAttribute('hidden');
    document.body.style.overflowY = 'hidden';
  } else{
    modalChat.classList.toggle('feedback-modal--invisible');
    overlay.setAttribute('hidden', 'hidden');
    document.body.style.overflowY = '';
  }
}

export {modalChat, btnChat, btnCloseFeedbackModal, toggleChatModal};
