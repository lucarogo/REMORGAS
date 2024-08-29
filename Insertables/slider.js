const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
}

function moveToNextSlide() {
    if (currentIndex < 2) {  // Cambiar el límite a 2 para la tercera imagen (index 2)
        currentIndex++;
    } else {
        currentIndex = 0;  // Reiniciar al principio después de la tercera imagen
    }
    updateCarousel();
}

nextButton.addEventListener('click', moveToNextSlide);

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = 2;  // Si estás en la primera imagen, volver a la tercera
    }
    updateCarousel();
});

// Agregar auto deslizamiento cada 4 segundos
setInterval(moveToNextSlide, 1000);

updateCarousel();
