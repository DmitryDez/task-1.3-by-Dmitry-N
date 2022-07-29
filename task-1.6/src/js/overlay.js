let overlay   = document.querySelector('.overlay');
overlay.addEventListener('click', overlayHandler);

function overlayHandler(){
  let tablet = window.matchMedia("(min-width: 768px) and (max-width: 1119px)");
  if(tablet.matches === true){
    toggleMenuModal();
  }
}

export {overlay, overlayHandler};
