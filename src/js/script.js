// Navbar fixed
window.onscroll = function () {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("navbar-fixed", window.scrollY > 0);
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("hidden");
});
