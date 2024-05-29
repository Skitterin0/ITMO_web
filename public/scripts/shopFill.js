window.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');

    socket.on('products', (data) => {
        let products = data.products
        for(i=0; i<products.length; ++i) {
            productsContainer.innerHTML += productDiv(products[i].price, products[i].image);
        }
    });

    socket.emit('products');
});

function productDiv(price, image) {
    return `<div class="products__item">
    <img class="products__img" src="${image}" height="652" width="522">
    <p class="product__price">
        $ ${price}
    </p>
    <a class="link cart_button">
        В корзину
    </a>
</div>`;
}