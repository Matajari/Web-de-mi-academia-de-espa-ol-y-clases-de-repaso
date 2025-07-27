// Cambia el idioma del contenido
document.getElementById("languageSwitcher").addEventListener("change", function() {
  const lang = this.value;
  document.querySelectorAll("[data-lang-es]").forEach(el => {
    el.textContent = el.dataset["lang" + lang];
  });
});

// Contador de oferta de 24h
const countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000);
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  if (distance < 0) {
    document.getElementById("countdown").innerText = "Oferta finalizada";
    clearInterval(timer);
    return;
  }
  const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const m = Math.floor((distance / (1000 * 60)) % 60);
  const s = Math.floor((distance / 1000) % 60);
  document.getElementById("countdown").innerText = `${h}h ${m}m ${s}s`;
}, 1000);
