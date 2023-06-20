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