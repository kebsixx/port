// Navbar fixed
window.onscroll = function () {
  const navbar = document.querySelector("header");
  const toTop = document.querySelector("#toTop");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    navbar.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != nav) {
    hamburger.classList.toggle("hamburger-active");
    nav.classList.toggle("hidden");
  }
})
