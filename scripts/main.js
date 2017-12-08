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
