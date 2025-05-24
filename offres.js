// scroll.js
const cartes = document.querySelectorAll('.offre-carte');

window.addEventListener('scroll', () => {
  cartes.forEach((carte) => {
    const rect = carte.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      carte.classList.add('visible');
    }
  });
});
