const products = [
    {
        name: 'Product 1',
        price: 100,
        image: 'product1.jpg'
    },
    {
        name: 'Product 2',
        price: 200,
        image: 'product2.jpg'
    },
    {
        name: 'Product 3',
        price: 300,
        image: 'product3.jpg'
    }
];

function renderProducts() {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <img src="${product.image}" alt="${product.name}">
            <button class="add-to-cart-button" data-product-name="${product.name}" data-product-price="${product.price}">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function addToCart(productName, productPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
}

renderProducts();

document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product-name');
        const productPrice = button.getAttribute('data-product-price');
        addToCart(productName, productPrice);
    });
});