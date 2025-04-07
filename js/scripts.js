
    // today
    
    function showDay() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
        const feformat = now.toLocaleDateString('en-En', options); 
        document.getElementById('fecha-actual').textContent = feformat;
    }

    showDay(); 

