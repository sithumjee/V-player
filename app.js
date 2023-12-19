let menuIcon = document.querySelector(".menuIcon");
let sideBar = document.querySelector(".side-bar");

menuIcon.onclick = function () {
  sideBar.classList.toggle("small-sidebar");
};
