document.addEventListener('DOMContentLoaded', () => {
    const columnas = document.querySelectorAll('.columna .numero');
    
    columnas.forEach(columna => {
        const target = +columna.getAttribute('data-target');
        const increment = target / 800; // Aumenta el número total de incrementos para ralentizar la animación
        let current = 0;

        const updateNumber = () => {
            if (current < target) {
                current += increment;
                columna.textContent = Math.ceil(current);
                requestAnimationFrame(updateNumber);
            } else {
                columna.textContent = target;
            }
        };

        updateNumber();
    });
});
