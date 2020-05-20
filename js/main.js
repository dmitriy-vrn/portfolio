const navToggle = document.querySelector(".menu-toggle");
const navTop = document.querySelector(".top-nav");

function burgerMenu(navToggle) {
  navToggle.classList.toggle("open");
  navTop.classList.toggle("open");
}
