const toggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  toggle.classList.toggle("open");
});

// (optionnel) Fermer le menu quand on clique sur un lien
document.querySelectorAll(".mobile-menu a").forEach(link =>
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    toggle.classList.remove("open");
  })
);
