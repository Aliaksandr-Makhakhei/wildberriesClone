import { getCardById } from "./serverDataAPI";

//open quick view modal
export function openQuickView(id) {
  const cards = document.getElementById(id);
  cards.addEventListener("click", onOpenHandlerModal);
}

function onOpenHandlerModal(event) {
  const target = event.target;
  if (target.type === "button") {
    getCardById(target.parentElement.id);
  }
}

//close quick view modal
export function closeQuickView() {
  return new Promise(() => {
    const closeBtn = document.getElementById("close-btn");
    closeBtn.addEventListener("click", onCloseHandlerModal);
  });
}

function onCloseHandlerModal(event) {
  if (event.target) {
    const modal = document.getElementById("quick-view-modal");
    modal.innerHTML = "";
    modal.style.display = "none";
  }
}