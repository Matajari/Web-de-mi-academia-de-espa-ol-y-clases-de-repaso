// Cambia texto según idioma seleccionado
document.getElementById("languageSwitcher").addEventListener("change", function() {
  const lang = this.value;
  document.querySelectorAll("[data-lang-es]").forEach(el => {
    el.textContent = el.dataset["lang" + lang];
  });
});

// Cuenta regresiva de 24h
const countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000);
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  if (distance < 0) {
    document.getElementById("countdown").innerText = "Oferta finalizada";
    clearInterval(countdown);
    return;
  }
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerText = `${h}h ${m}m ${s}s`;
}, 1000);
