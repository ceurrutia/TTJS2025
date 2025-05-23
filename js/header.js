const header = `
<div id="top"></div>
        <nav>
            <div class="nav-logo"><a href="index.html" class="nav-logo"><img src="./images/logo.png" width="150"
                        alt="Meridiano 0"></a></div>

            <!-- Hamburguesa toggle-->
            <div class="nav-toggle" id="navToggle">
                ☰
            </div>

            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html">Home</a></li>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <!-- Carrito de compra -->
            <div class="nav-cart">
                <i class="fas fa-shopping-cart" id="cartIcon"></i>
                <span id="cartCount">0</span>
            </div>
        </nav>
`

// Traer el header

document.addEventListener('DOMContentLoaded', ()=>{
    const headerItem = document.getElementById('header')
    headerItem.innerHTML = header

// Toogle hamburguesa para moviles

const toggle = document.getElementById('navToggle')
const menu = document.getElementById('navMenu')

toggle.addEventListener('click', () => {
    //Usamos classList, propiedad de lectura que devuelve un objeto DOMTokenList que representa la lista de clases de un elemento HTML. Este objeto permite agregar, eliminar, alternar y verificar la existencia de clases de forma eficiente, sin necesidad de manipular la cadena de texto className del elemento.
    menu.classList.toggle('show');
    })
})