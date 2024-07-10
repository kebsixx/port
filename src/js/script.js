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
});

// Dark mode toggle
const darkToggle = document.querySelector("#darkToggle");
const html = document.querySelector("html");
const lightIcon = document.querySelector("#lightIcon");
const darkIcon = document.querySelector("#darkIcon");

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    darkIcon.classList.toggle("hidden");
    lightIcon.classList.toggle("hidden");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    darkIcon.classList.toggle("hidden");
    lightIcon.classList.toggle("hidden");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

if (darkToggle.checked == true) {
  darkIcon.classList.toggle("hidden");
} else {
  lightIcon.classList.toggle("hidden");
}
