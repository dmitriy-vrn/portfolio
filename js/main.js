const navToggle = document.querySelector(".menu-toggle");
const navTop = document.querySelector(".top-nav");
const navLinks = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".top-nav");

function burgerMenu(navToggle) {
  navToggle.classList.toggle("open");
  navTop.classList.toggle("open");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}
