
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // retire l'effet si on sort de la vue
      }
    });
  }, {
    threshold: 0.4 // déclenche un peu avant d’être totalement visible
  });

  document.querySelectorAll('.text, .image').forEach(el => {
    observer.observe(el);
  });

