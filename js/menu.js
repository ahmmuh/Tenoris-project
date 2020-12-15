"use strict";

// toggle menu
const toggleMenu = document.querySelector(".toggle-icon");

const toggleHandler = () => {
  const menuNotis = "Hej! Har inte hunnit skriva kod för det";
  alert(menuNotis);
};
toggleMenu.addEventListener("click", toggleHandler);

// Change menu BGC on scroll

window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  if (this.scrollY <= 12) nav.className = "";
  else nav.className = "nav-onscroll";
};
