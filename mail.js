
  const form = document.getElementById('contact-form');
  const messageEl = document.getElementById('form-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        messageEl.textContent = "✅ Message envoyé avec succès !";
        messageEl.style.color = "green";
        form.reset();
      } else {
        messageEl.textContent = "❌ Une erreur est survenue. Merci de réessayer.";
        messageEl.style.color = "red";
      }
    } catch (error) {
      messageEl.textContent = "❌ Une erreur est survenue. Merci de réessayer.";
      messageEl.style.color = "red";
    }
  });