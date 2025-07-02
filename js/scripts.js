
let cart = JSON.parse(localStorage.getItem('cart')) || []; 
const productsGrid = document.getElementById('productsGrid'); 

function showDay() {
    const fechaActualElement = document.getElementById('fecha-actual');
    if (fechaActualElement) { 
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-En', options); 
        fechaActualElement.textContent = formattedDate;
    }
}

//hamburgesa toggle
const navToggle = document.getElementById('navToggle'); 
const navMenu = document.getElementById('navMenu');     

if (navToggle && navMenu) { 
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show'); 
    });
}

//contador del nav
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.innerText = totalQuantity;
    }
}

// Guarda item  en carrito en el Local Storage y actualiza el counter
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); 
}

//Agregar
function addToCart(e) {
    e.preventDefault(); 
    const productId = e.target.dataset.id; 

    const productToAdd = products.find(p => p.id === productId);

    if (productToAdd) {
        const existingItem = cart.find(item => item.id === productId); 
        if (existingItem) {
            //sumo para incremetar de a uno
            existingItem.quantity++; 
        } else {
            // Si no existe, cantidad 1
            cart.push({ ...productToAdd, quantity: 1 }); 
        }
        saveCart(); 
        alert(`${productToAdd.title} added to your cart.`); 
    }
}


function renderProducts() {
    if (!productsGrid) return; 

    productsGrid.innerHTML = ''; 
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <a style="text-decoration: none; color: #333;" href="detail.html?id=${product.id}" class="card-link"> <img src="${product.image}" alt="${product.title}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title" stylle="text-decoration: none;">${product.title}</h5>
                    <span class="badge badge-${product.category.toLowerCase()}">${product.category}</span>
                    <p class="card-text description">${product.description.substring(0,250)}</p> <p style="font-weight: bold;">Price: $${product.price.toFixed(2)}</p>
                </div>
            </a>
            </div>
        `;
        productsGrid.appendChild(card); 
    });

    
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

if (document.body.id === 'cart-page') {
    const cartTableBody = document.querySelector('#cartTable tbody'); 
    const totalAmountElement = document.getElementById('totalAmount'); 
    const buyNowBtn = document.getElementById('buyNowBtn');         
    const clearCartBtn = document.getElementById('clearCartBtn');     

    function renderCartPage() {
        cartTableBody.innerHTML = ''; 

        if (cart.length === 0) {
            cartTableBody.innerHTML = '<tr><td colspan="5" class="text-center">Your cart is empty.</td></tr>';
            totalAmountElement.textContent = 'Total: $0.00'; 
            return;
        }

        let total = 0;
        cart.forEach(item => {
            const row = document.createElement('tr'); //creo nueva fila para cada item
            const subtotal = item.price * item.quantity;
            total += subtotal; //acumula total

            row.innerHTML = `
                <td>${item.title}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <button class="btn change-quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                    ${item.quantity}
                    <button class="btn change-quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                </td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><button class="btn btn-danger remove-item-btn" data-id="${item.id}">Remove</button></td>
            `;
            cartTableBody.appendChild(row); 
        });

        totalAmountElement.textContent = `Total: $${total.toFixed(2)}`; 
        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
        document.querySelectorAll('.change-quantity-btn').forEach(button => {
            button.addEventListener('click', changeQuantity);
        });
    }

    // Eliminar
    function removeFromCart(e) {
        const productId = e.target.dataset.id;
        cart = cart.filter(item => item.id !== productId); 
        saveCart(); 
        renderCartPage(); 
    }

    // Update cantidad
    function changeQuantity(e) {
        const productId = e.target.dataset.id;
        const action = e.target.dataset.action; 
        const itemToUpdate = cart.find(item => item.id === productId); 

        if (itemToUpdate) {
            if (action === 'increase') {
                itemToUpdate.quantity++;
            } else if (action === 'decrease') {
                if (itemToUpdate.quantity > 1) {
                    itemToUpdate.quantity--;
                } else {
                    removeFromCart({ target: { dataset: { id: productId } } });
                    return; 
                }
            }
            saveCart(); 
            renderCartPage(); 
        }
    }

    //Botón de "Buy now"
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('¡Thanks!');
                localStorage.removeItem('cart'); 
                cart = []; 
                updateCartCount(); 
                renderCartPage(); 
            } else {
                alert('Empty cart. ¡Add new products!');
            }
        });
    }

    // Listener para el botón de "Vaciar Carrito"
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('¿Are you sure you want to empty cart?')) {
                localStorage.removeItem('cart'); 
                cart = []; 
                saveCart(); 
                renderCartPage(); 
                console.log("Empty cart.");
            }
        });
    }
    document.addEventListener('DOMContentLoaded', renderCartPage);
}


//paginas de details

function renderProductDetail() {
    const productDetailContainer = document.getElementById('product-detail-container');
    if (!productDetailContainer) return; 

    //ID del producto de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        productDetailContainer.innerHTML = '<p class="text-danger">ID not found</p>';
        return;
    }

    //busca el producto por ID
    const product = products.find(p => p.id === productId); 

    if (!product) {
        productDetailContainer.innerHTML = '<p class="text-danger">Product not found.</p>';
        return;
    }

    let reviewsHtml = '';
    if (product.reviews && product.reviews.length > 0) {
        reviewsHtml = `
            <h3 class="mt-4">Reviews</h3>
            <div id="reviews-container">
        `;
        product.reviews.forEach(review => {
            reviewsHtml += `
                <div class="card mb-3">
                    <div class="card-body">
                        <p class="card-text">"${review.text}"</p>
                        <p class="card-subtitle text-muted"><strong>Name:</strong> ${review.author}</p>
                        <p class="card-subtitle text-muted"><strong>Buy at:</strong> ${review.date}</p>
                    </div>
                </div>
            `;
        });
        reviewsHtml += `</div>`;
    } else {
        reviewsHtml = '<p class="mt-4 text-muted">No reviews yet.</p>';
    }

    productDetailContainer.innerHTML = `
        <div class="card-grid">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-info">
            <h1>${product.title}</h1>
            <span class="badge-${product.category.toLowerCase()}">${product.category}</span>

            <p class="lead mt-3">${product.description}</p>
            <h2 class="text-success">$${product.price.toFixed(2)}</h2>
            <button class="btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            ${reviewsHtml}
            <button class="btn" onclick="window.location.href='index.html'">Go Index</button>
        </div>
        

    `;

    //listener al botón "Add to Cart" en la página de detalle
    const addToCartBtn = productDetailContainer.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }
}



document.addEventListener('DOMContentLoaded', () => {
   
    showDay();    
    updateCartCount(); 
    if (productsGrid) {
        renderProducts();
    }

    if (document.body.id === 'detail-page') {
        renderProductDetail();
    }
});