"use strict";
// Change menu BGC on scroll

window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  if (this.scrollY <= 12) nav.className = "";
  else nav.className = "nav-onscroll";
};
