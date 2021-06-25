"use strict";

// ------ Mobile menu --------
let navbar = document.querySelector(".navbar");
let hamburgerBtn = document.querySelector(".navbar__hamburger-btn");
let mobileNav = document.querySelector(".navbar__nav");

hamburgerBtn.addEventListener("click", () => {
  if (!mobileNav.classList.contains("navbar__nav--active")) {
    mobileNav.classList.add("navbar__nav--active");
    hamburgerBtn.src = "./images/icon-close.svg";
    navbar.classList.add("navbar--overlay-menu");
  } else {
    mobileNav.classList.remove("navbar__nav--active");
    hamburgerBtn.src = "./images/icon-hamburger.svg";
    navbar.classList.remove("navbar--overlay-menu");
  }
});
