
  const promoBanner = document.getElementById('promoBanner');
  const closeBtn = promoBanner.querySelector('.close-banner');

  closeBtn.addEventListener('click', () => {
    promoBanner.style.display = 'none';
  });



  document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // on arrête d'observer pour optimiser
      }
    });
  }, options);

  reveals.forEach(section => {
    observer.observe(section);
  });
});




 
const carousel = document.querySelector('.carousel');
let cards = Array.from(carousel.children);

// Clone des cartes pour l'effet infini (début et fin)
cards.forEach(card => {
  const cloneBefore = card.cloneNode(true);
  const cloneAfter = card.cloneNode(true);
  carousel.appendChild(cloneAfter);
  carousel.insertBefore(cloneBefore, carousel.firstChild);
});

let allCards = Array.from(carousel.children);
let cardWidth = cards[0].offsetWidth + 20;
let currentIndex = cards.length; // On commence au vrai début
let position = -cardWidth * currentIndex;

// Position de départ centrée
carousel.style.transform = `translateX(${position}px)`;

// Animation vers l’index cible
function goToIndex(index) {
  carousel.style.transition = 'transform 0.5s ease';
  position = -cardWidth * index;
  carousel.style.transform = `translateX(${position}px)`;
  currentIndex = index;
}

// Fonction boucle automatique
function next() {
  currentIndex++;
  goToIndex(currentIndex);

  // Réinitialisation sans transition si fin atteinte
  setTimeout(() => {
    if (currentIndex >= allCards.length - cards.length) {
      carousel.style.transition = 'none';
      currentIndex = cards.length;
      position = -cardWidth * currentIndex;
      carousel.style.transform = `translateX(${position}px)`;
    }
  }, 510);
}

function prev() {
  currentIndex--;
  goToIndex(currentIndex);

  setTimeout(() => {
    if (currentIndex < cards.length) {
      carousel.style.transition = 'none';
      currentIndex = allCards.length - (cards.length * 2);
      position = -cardWidth * currentIndex;
      carousel.style.transform = `translateX(${position}px)`;
    }
  }, 510);
}

// Auto-scroll
let auto = setInterval(next, 4000);

// Boutons
document.querySelector('.nav.next').onclick = () => {
  clearInterval(auto);
  next();
  auto = setInterval(next, 4000);
};

document.querySelector('.nav.prev').onclick = () => {
  clearInterval(auto);
  prev();
  auto = setInterval(next, 4000);
};
