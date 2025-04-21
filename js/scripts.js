
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
        menu.classList.toggle('show');
    });

