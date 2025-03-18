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

const btn = document.getElementById('btn-resume');
let particleInterval;

btn.addEventListener('mouseenter', function () {
  // Obtém dimensões do botão
  const w = btn.offsetWidth;
  const h = btn.offsetHeight;
  const particlesContainer = this.querySelector('.particles');

  // Gera partículas continuamente enquanto o mouse estiver sobre o botão
  particleInterval = setInterval(() => {
    const particle = document.createElement('span');
    particle.classList.add('particle');

    // Escolhe aleatoriamente uma borda para iniciar a partícula:
    // 0 - top, 1 - right, 2 - bottom, 3 - left
    const edge = Math.floor(Math.random() * 4);
    let startX, startY, tx, ty;
    const distance = 20 + Math.random() * 20; // deslocamento entre 20 e 40px
    const variation = 10 - Math.random() * 20; // variação para o outro eixo

    if (edge === 0) { 
      // Top edge: inicia no topo com x aleatório e se move para cima
      startX = Math.random() * w;
      startY = 0;
      tx = variation; 
      ty = -distance;
    } else if (edge === 1) { 
      // Right edge: inicia na direita com y aleatório e se move para a direita
      startX = w;
      startY = Math.random() * h;
      tx = distance;
      ty = variation;
    } else if (edge === 2) { 
      // Bottom edge: inicia embaixo com x aleatório e se move para baixo
      startX = Math.random() * w;
      startY = h;
      tx = variation;
      ty = distance;
    } else { 
      // Left edge: inicia na esquerda com y aleatório e se move para a esquerda
      startX = 0;
      startY = Math.random() * h;
      tx = -distance;
      ty = variation;
    }

    // Posiciona a partícula na posição calculada (relativa ao container)
    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    particle.style.setProperty('--tx', tx + 'px');
    particle.style.setProperty('--ty', ty + 'px');

    particlesContainer.appendChild(particle);

    // Remove a partícula após a animação para evitar acúmulo
    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  }, 50); // Ajuste o intervalo conforme necessário (em ms)
});

btn.addEventListener('mouseleave', function () {
  clearInterval(particleInterval);
});