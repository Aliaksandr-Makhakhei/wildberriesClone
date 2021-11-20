import { findCards } from "./serverDataAPI";
import { openQuickView } from "./quickView"

const search = document.getElementById("search");

export function connectSearch() {
  search.addEventListener("input", ({ target }) => {
    findCards(target.value).then((results) => createResults(results))
    .then(() => openQuickView('searchModal'))
  });
  
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const template = document.createElement("div");
template.classList.add("header__search-results");
template.id = 'searchModal'

function createResults(cards) {
  if (!cards.length) {
    template.style.display = "none";
    return;
  }
  let accumulator = "";

  // createCards(cards)
  cards.forEach((product) => {
    const { name, category, id } = product;
    const cardTitle = `${name}/${category}`
    accumulator =
      accumulator +
      `
      <div class="search-card">
      <div class="search-card__description" id="${id}">
      <p class="search-card__name">${cardTitle}</p>
      <button class="search-card__quick-view" type="button">Быстрый просмотр</button>
      </div>
    </div>
       `;
  });
  template.innerHTML = accumulator;

  template.style.display = "flex";
  insertAfter(search, template);
}