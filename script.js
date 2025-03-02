// Seleciona os botões e o container do carrossel
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');

// Calcula a largura de um card (incluindo a margem)
const card = document.querySelector('.project-card');
let cardStyle = getComputedStyle(card);
let cardMarginRight = parseInt(cardStyle.marginRight);
let cardWidth = card.offsetWidth + cardMarginRight;

// Avança dois cards por clique (ajuste conforme sua preferência)
nextBtn.addEventListener('click', () => {
  carousel.scrollLeft += cardWidth * 2;
});

// Volta dois cards por clique
prevBtn.addEventListener('click', () => {
  carousel.scrollLeft -= cardWidth * 2;
});
