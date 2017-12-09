// ~ Hello World ~
console.log('%c<Hello World />', 'color: #37A4DD');

let modal = document.getElementById('modal'); // Get my modal
let close = document.getElementById('close'); // The close button
let modalImg = document.getElementById('modal-img'); // The img container
let caption = document.getElementById('caption'); // The caption container

let images = document.getElementsByClassName('3Ds');

for ( let i = 0; i < images.length; i ++ ) {

  images[i].onclick = function() {
    let img = this.getElementsByTagName('img')[0];
    modal.style.display = "flex";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
  }

}

close.onclick = function() { modal.style.display = "none"; }

if ( window.innerWidth <= 1024 ) {

  let nav = document.getElementsByTagName('nav')[0];
  let header = document.getElementsByTagName('header')[0];
  let section = document.getElementsByTagName('section')[0];
  let bars = document.getElementById('bars'); // Hamburger
  function hide(){ header.style.width = "0"; }
  bars.onclick = function() {
    header.style.width = "75%";
  }
  section.onclick = hide;
  nav.onclick = hide;

}