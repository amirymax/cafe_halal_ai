// Глобальный словарь для хранения товаров в корзине
// Глобальный словарь для хранения продуктов в корзине
let CART = {};

// Функция для увеличения количества продукта
function increaseCount() {
    const foodCard = event.target.closest('.food-card');
    if (!foodCard) return;

    const name = foodCard.querySelector('.name').textContent.trim();
    const countElement = foodCard.querySelector('.count');
    let count = parseInt(countElement.textContent);

    count++;

    countElement.textContent = count;

    // Обновляем словарь CART
    if (CART.hasOwnProperty(name)) {
        CART[name]++;
    } else {
        CART[name] = 1;
    }
}

// Функция для уменьшения количества продукта
function decreaseCount() {
    const foodCard = event.target.closest('.food-card');
    if (!foodCard) return;

    const name = foodCard.querySelector('.name').textContent.trim();
    const countElement = foodCard.querySelector('.count');
    let count = parseInt(countElement.textContent);

    if (count === 0) return;

    count--;

    countElement.textContent = count;

    // Обновляем словарь CART
    if (CART.hasOwnProperty(name)) {
        CART[name]--;
        if (CART[name] === 0) {
            delete CART[name];
        }
    }
}


// Функция для открытия модального окна корзины
function openCartModal() {
    let modal = document.getElementById('cartModal');
    let modalContent = document.getElementById('cartItems');
    modal.style.display = 'block';
  
    // Очистка содержимого модального окна перед открытием
    modalContent.innerHTML = '';
  
    // Добавление элементов корзины в модальное окно
    for (let item in CART) {
      if (CART.hasOwnProperty(item)) {
        let cartItem = document.createElement('div');
        cartItem.textContent = item + ': ' + CART[item];
        modalContent.appendChild(cartItem);
      }
    }
  }
  
  // Функция для закрытия модального окна
  function closeModal() {
    let modal = document.getElementById('cartModal');
    modal.style.display = 'none';
  }
  
  // Закрытие модального окна при клике за его пределами
  window.onclick = function(event) {
    let modal = document.getElementById('cartModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  