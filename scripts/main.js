// ~ Hello World ~
console.log('%c<Hello World />', 'color: #DD375E');

// Get elements

var buttons = document.getElementsByClassName("buttons");

var section = document.getElementsByTagName("section")[0];
document.addEventListener('scroll', function(e) {

  if ( window.scrollY >= section.offsetTop ) {
    for (var i = 0; i < buttons.length; i ++) { buttons[i].style.visibility = "visible" }
  } else {
    for (var i = 0; i < buttons.length; i ++) { buttons[i].style.visibility = "hidden" }
  }

});
