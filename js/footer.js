"use strict";
function createFooter() {
  const footer = document.querySelector("#footer");
  const footerElements = `
    <div class="footer-content">
        <a href="#">Cookies</a>
        <a href="#">Privacy</a>
        <a href="#">Legal</a>
      </div>`;
  footer.innerHTML = footerElements;
}

createFooter();
