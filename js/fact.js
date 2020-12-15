"use strict";
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
