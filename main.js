let totalSum = 0;
let totalPriceBox = document.createElement("div");
totalPriceBox.className = "total-price";
document.body.appendChild(totalPriceBox);

fetch('https://fakestoreapi.com/products?limit=10')
    .then(response => response.json())
    .then(data => {
        const productList = document.querySelector('.product-list');

        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p class="price">💲 ${product.price.toFixed(2)}</p>
                    <p class="category">📦 ${product.category}</p>
                    <button class="buy-btn">🛒 Купить</button>
                </div>
            `;

            productList.appendChild(productCard);

            const buyBtn = productCard.querySelector('.buy-btn');
            buyBtn.addEventListener("click", () => {
                const userConfirm = confirm(`Вы хотите добавить "${product.title}" в корзину за $${product.price.toFixed(2)}?`);
                
                if (userConfirm) {
                    totalSum += product.price;
                    totalPriceBox.innerHTML = `<h2>🛒 Общая сумма: $${totalSum.toFixed(2)}</h2>`;
                }
            });
        });
    });

