import { getProductById } from "./serverDataAPI";
import { getStorageData, setStorageData } from "./storageAPI";

const basketModalWindow = document.querySelector(".basket__modal");
const btnClearBasket = document.querySelector(".clear");
const purchases = document.querySelector(".purchases");
const headingBasket = document.querySelector(".text");
const result = document.querySelector(".result");

let sum = 0;
let storageData = [];
document.addEventListener("click", (event) => {
  const className = event.target.className
  if (className === "header__basket-img" || className === "header__text") {
    onOpen();
    renderBasket();
  } else if (className === "close") {
    onClose();
  }
});

document.addEventListener('keyup', (event) => {
  if(event.key === 'Escape'){
    onClose()
  }
})

function onOpen() {
  basketModalWindow.style.display = "block";
}

function onClose() {
  basketModalWindow.style.display = "none";
}

btnClearBasket.addEventListener("click", () => {
  result.innerText = "Итого: 0 руб";
  headingBasket.innerText = "В корзине пока пусто";
  purchases.innerHTML = "";
  localStorage.removeItem("basket");
  storageData = [];
  sum = 0;
});

export function byBasketHandler(id, name) {
  const goods = document.getElementById(id);
  goods.addEventListener("click", (event)=> getProduct(event, name));
}

function getProduct(event, name) {
  if (event.target.className === name) {
    const cardId = event.target.parentElement.id;
    getProductById(cardId);
  }
}

export function addInStorage(product) {
  storageData.push(product);
  setStorageData("basket", storageData);
  headingBasket.innerText = "Корзина";
}

function renderBasket() {
  purchases.innerHTML = "";
  sum = 0
  storageData = getStorageData("basket");
  if (storageData) {
    headingBasket.innerText = "Корзина";
  }
  storageData ??= [];
  storageData.forEach((item) => {
    const { category, name, price, avatar} = item;
    const purchase = document.createElement("div");
    purchase.classList.add('purchase__name')
    purchase.innerHTML = `
    <img class="img" src="${avatar}">
    <div class="product__text">
    <p>${category}</p>
    <p>${name}</p>
    <p>${price} руб</p>
    </div>`
    purchases.append(purchase);
    sum += Number(price);
  });
  result.innerText = `Итого: ${Number(sum.toFixed(2))} руб`;
}

export function addBasketEvents(){
  byBasketHandler('cards', 'card__cart-icon');
  byBasketHandler('quick-view-modal', 'quick-view__content-button');
}