
    // Traer el Dia de hoy
    
    function showDay() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
        const forformat = now.toLocaleDateString('en-En', options); 
        document.getElementById('fecha-actual').textContent = forformat;
    }

    showDay()