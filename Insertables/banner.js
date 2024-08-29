document.addEventListener('DOMContentLoaded', () => {
  const banners = [
    '/img/banner/banner  1.png',
    '/img/banner/banner 2.png',
    '/img/banner/banner 3.png',
    '/img/banner/banner4.png',
    '/img/banner/banner5.png',
  ];

  const bannerContainer = document.querySelector('.banner');
  let currentIndex = 0;

  // Crear imágenes dinámicamente
  banners.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Banner ${index + 1}`;
    img.classList.add(index === currentIndex ? 'active' : 'inactive');
    bannerContainer.appendChild(img);
  });

  const updateImage = (newIndex) => {
    const currentImg = bannerContainer.querySelector('.active');
    const nextImg = bannerContainer.querySelectorAll('img')[newIndex];

    currentImg.classList.remove('active');
    currentImg.classList.add('inactive');

    nextImg.classList.remove('inactive');
    nextImg.classList.add('active');

    currentIndex = newIndex;
  };

  // Cambiar a una imagen aleatoria cada 4 segundos
  const startAutoChange = () => {
    setInterval(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * banners.length);
      } while (newIndex === currentIndex);

      updateImage(newIndex);
    }, 4000); // 4000 milisegundos = 4 segundos
  };

  // Eventos de clic en las flechas y miniaturas
  document.getElementById('flecha-izquierda').addEventListener('click', () => {
    const newIndex = (currentIndex > 0) ? currentIndex - 1 : banners.length - 1;
    updateImage(newIndex);
  });

  document.getElementById('flecha-derecha').addEventListener('click', () => {
    const newIndex = (currentIndex < banners.length - 1) ? currentIndex + 1 : 0;
    updateImage(newIndex);
  });

  document.querySelectorAll('.miniatura').forEach((miniatura, index) => {
    miniatura.addEventListener('click', () => {
      updateImage(index);
    });
  });

  // Iniciar el cambio automático
  startAutoChange();
});
