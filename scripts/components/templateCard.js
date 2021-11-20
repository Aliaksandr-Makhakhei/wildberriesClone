import { cutTitle } from "./textCutter.js";

//creating a card template
export function createCards(products) {
  const cards = document.getElementById("cards");
  products.forEach((product) => {
    const { name, price, avatar, category, id } = product;
    const cardTitle = `${name}/${category}`
    cards.insertAdjacentHTML("afterBegin",
      `
        <div class="card" id="${id}">
            <button class="card__quick-view" type="button">Быстрый просмотр</button>          
            <img class="card__image" src="${avatar}" alt="goods">
            <div class="card__cart-icon"></div>
            <div class="card__description">
            <p class="card__product-name">${cutTitle(cardTitle)}</p>
            <p class="card__price">${price} руб</p>
            </div>
        </div>
       `
    );
  });
}



