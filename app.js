// Глобальный словарь для хранения товаров в корзине
let cart = {};

// Функция для увеличения количества продукта
function increaseCount() {
    // Получаем текущее количество из поля count
    let countElement = document.querySelector('.spicy-indicators');
    let count = parseInt(countElement.textContent);

    // Увеличиваем количество на 1
    count += 1;
    countElement.textContent = count;

    // Получаем название продукта
    let productName = document.querySelector('.div13').textContent.trim();

    // Если продукт уже есть в корзине, увеличиваем его количество
    if (cart.hasOwnProperty(productName)) {
        cart[productName] += 1;
    } else {
        // Иначе добавляем продукт в корзину
        cart[productName] = 1;
    }
}

// Функция для уменьшения количества продукта
function decreaseCount() {
    // Получаем текущее количество из поля count
    let countElement = document.querySelector('.spicy-indicators');
    let count = parseInt(countElement.textContent);

    // Если количество равно 0, ничего не делаем
    if (count === 0) {
        return;
    }

    // Уменьшаем количество на 1
    count -= 1;
    countElement.textContent = count;

    // Получаем название продукта
    let productName = document.querySelector('.div13').textContent.trim();

    // Если продукт есть в корзине, уменьшаем его количество
    if (cart.hasOwnProperty(productName)) {
        cart[productName] -= 1;
        // Если количество стало равным 0, удаляем продукт из корзины
        if (cart[productName] === 0) {
            delete cart[productName];
        }
    }
}

// Поиск кнопок и добавление обработчиков событий
document.addEventListener('DOMContentLoaded', function() {
    let increaseButton = document.querySelector('.allergen-info-column');
    increaseButton.addEventListener('click', decreaseCount);

    let decreaseButton = document.querySelector('.vegetarian-details');
    decreaseButton.addEventListener('click',increaseCount);
});
