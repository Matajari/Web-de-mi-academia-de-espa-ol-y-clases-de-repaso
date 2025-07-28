document.addEventListener('DOMContentLoaded', function() {
  // Contador regresivo (24 horas)
  function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let hours = 24;
    let minutes = 0;
    let seconds = 0;

    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(interval);
            countdownElement.textContent = "¡Oferta terminada!";
            return;
          }
          hours--;
          minutes = 59;
        } else {
          minutes--;
        }
        seconds = 59;
      } else {
        seconds--;
      }

      countdownElement.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  // Selector de idiomas
  const languageSwitcher = document.getElementById('languageSwitcher');
  languageSwitcher.addEventListener('change', function() {
    const lang = this.value;
    document.querySelectorAll('[data-lang-es]').forEach(element => {
      element.textContent = element.getAttribute(`data-lang-${lang}`) || element.textContent;
    });
  });

  // Iniciar funciones
  startCountdown();
});
