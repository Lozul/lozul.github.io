// ~ Hello World ~
console.log('%c<Hello World />', 'color: #37A4DD');

var modal = document.getElementById('modal'); // Get my modal
var close = document.getElementById('close'); // The close button
var modalImg = document.getElementById('modal-img'); // The img container
var caption = document.getElementById('caption'); // The caption container

var images = document.getElementsByClassName('3Ds');

for ( var i = 0; i < images.length; i ++ ) {

  images[i].onclick = function() {
    let img = this.getElementsByTagName('img')[0];
    modal.style.display = "flex";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
  }

}

close.onclick = function() { modal.style.display = "none"; }

var nav = document.getElementsByTagName('nav')[0];
var header = document.getElementsByTagName('header')[0];
var section = document.getElementsByTagName('section')[0];
var bars = document.getElementById('bars'); // Hamburger
function hide(){ header.style.width = "0"; }

bars.onclick = function() {
  header.style.width = "75%";
}

section.onclick = hide;
nav.onclick = hide;
