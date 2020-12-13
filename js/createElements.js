"use strict";

(function () {
  const navbar = document.querySelector("#navbar");
  const menu = `
       <div class="container">
        <h2>Tenoris One</h2>
        <nav class="menu">
          <ul>
            <li><a href="#">Hem</a></li>
            <li><a href="#">Fonden</a></li>
            <li><a href="#">Om oss</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </nav>
        <button type="button" class="toggle-menu">
          <i class="fas fa-bars 3x"></i>
        </button>
      </div>
    `;
  navbar.innerHTML = menu;
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

  function createFact() {
    const fact = document.querySelector(".fact-area");
    const factElements = `
    <div class="fact-container">
        <h1>Fondfakta</h1>
        <div class="fact-list grid-2">
          <ul class="right-list">
            <li>Fondnamn</li>
            <li>ISIN-kod</li>
            <li>Fondtyp</li>
            <li>Förvaltningsavgift</li>
            <li>Fondkategori</li>
          </ul>

          <ul class="left-list">
            <li>Fondens risk</li>
            <li>ISIN-Jämförelseindex</li>
            <li>Fondens startdatum:</li>
            <li>Fondbolag AIFM Capital AB (Org. 556737-5562)</li>
            <li>Fondförvaltare</li>
          </ul>
        </div>
      </div>`;
    fact.innerHTML = factElements;
  }

  createFact();
})();
