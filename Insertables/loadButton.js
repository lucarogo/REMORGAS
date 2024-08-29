// Función para cargar el contenido HTML externo
function loadHTML() {
    fetch('/Insertables/button.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido en el body de la página
            document.body.insertAdjacentHTML('beforeend', data);

            // Cargar el CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/Insertables/buttonStyles.css';
            document.head.appendChild(link);

            // Añadir el script de Font Awesome si no está ya en el documento
            if (!document.querySelector('script[src*="font-awesome"]')) {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js';
                document.head.appendChild(script);
            }
        })
        .catch(error => console.error('Error al cargar el HTML:', error));
}

// Función para redirigir a WhatsApp
function redirectToWhatsApp() {
    // Cambia el número de teléfono por el tuyo
    const phoneNumber = "51974364608";
    const message = "Hola, me gustaría obtener más información.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Esperar a que el contenido de la página esté completamente cargado
window.onload = loadHTML;
