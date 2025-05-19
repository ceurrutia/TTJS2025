
    // Dia de hoy
    
    function showDay() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
        const forformat = now.toLocaleDateString('en-En', options); 
        document.getElementById('fecha-actual').textContent = forformat;
    }

    showDay(); 

    // Toogle hamburguesa para moviles

    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    toggle.addEventListener('click', () => {
        //Usamos classList, propiedad de lectura que devuelve un objeto DOMTokenList que representa la lista de clases de un elemento HTML. Este objeto permite agregar, eliminar, alternar y verificar la existencia de clases de forma eficiente, sin necesidad de manipular la cadena de texto className del elemento. 
        menu.classList.toggle('show');
    });

