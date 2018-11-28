
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop < 50 || document.documentElement.scrollTop > 50) {
    (document.getElementById("audrey").style.height = window.scrollY + "150px") & 
    ( document.getElementById("audrey").style.width = window.scrollY + "50px");
  }}
