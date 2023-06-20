var tab01 = ["leftSide-Active.png","leftSide-notActive.png"]
var tab02 = ["rightSide-Active.png","rightSide-notActive.png"]


function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
  document.getElementById("myImg").src = "./images/Active.png";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myImg").src = "./images/notActive.png";
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}

function buttonClicked(buttonId) {
  var buttons = document.getElementsByClassName('icon');
  var images = document.querySelectorAll('.icon img');

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].id === buttonId) {
      buttons[i].classList.add('active');
      images[i].src = images[i].src.replace('-notActive', '-Active');
    } else {
      buttons[i].classList.remove('active');
      images[i].src = images[i].src.replace('-Active', '-notActive');
    }
  }
}

document.addEventListener('click', function(event) {
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove('active');
    images[j].src = images[j].src.replace('-Active', '-notActive');
  }
});

document.addEventListener('touchstart', function(event) {
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove('active');
    images[j].src = images[j].src.replace('-active', '-notActive');
  }
});