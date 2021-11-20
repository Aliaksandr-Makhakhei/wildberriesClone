//creating a modal window template
export function createModalQuickView(product) {
  const modal = document.getElementById('quick-view-modal');
  modal.style.display = 'block';
  const { name, price, avatar, category, description, id } = product;
  modal.innerHTML = '';
  modal.insertAdjacentHTML('afterBegin',
    `
        <div class="quick-view__content">
        <button class="quick-view__content-close" id="close-btn" type="button">X</button>
        <img class="quick-view__content-image" src="${avatar}" alt="goods">
        <div class="quick-view__content-container" id = "${id}">
          <p class="quick-view__content-name">${name}</p>
          <p class="quick-view__content-category">${category}</p>
          <p class="quick-view__content-description">${description}</p>
          <p class="quick-view__content-price">${price} руб</p>
          <button class="quick-view__content-button" type="button">Добавить в  корзину</button>
        </div>
        </div>
      </div>
       `
  );
}