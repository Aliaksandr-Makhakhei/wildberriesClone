import { createModalQuickView } from "./templateQuickView";
import { createCards } from "./templateCard";
import { closeQuickView } from "./quickView";
import { addInStorage } from "./basket";
import { filterProducts } from "./search";

//receiving all goods from the server
export function getCards() {
  return new Promise((resolve, reject) => {
    fetch("https://615d370312571a00172074c8.mockapi.io/goods")
      .then((response) => response.json())
      .then((products) => resolve(createCards(products)))
      .catch((err) => reject(err));
  });
}

export function findCards(searchTerm) {
  return new Promise((resolve, reject) => {
    fetch("https://615d370312571a00172074c8.mockapi.io/goods")
      .then((response) => response.json())
      .then((products) => resolve(filterProducts(products, searchTerm)))
      .catch((err) => reject(err))
  });
}

//receiving a card by ID
export function getCardById(cardId) {
  return new Promise((resolve, reject) => {
    fetch(`https://615d370312571a00172074c8.mockapi.io/goods/${cardId}`)
      .then((response) => response.json())
      .then((product) => createModalQuickView(product))
      .then(() => resolve(closeQuickView()))
      .catch((err) => reject(err));
  });
}

//receiving a product by ID
export function getProductById(cardId) {
  return new Promise((reject) => {
    fetch(`https://615d370312571a00172074c8.mockapi.io/goods/${cardId}`)
    .then((product) => (product.json()))
    .then((product) => addInStorage(product))
    .catch((err) => reject(err));
  });
}