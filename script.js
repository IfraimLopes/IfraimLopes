// Mobile nav toggle + smooth close on link click
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
        }
      }
    });
  });

  // Basic form submit feedback (prevents actual mailto test in dev)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    // Allow default mailto behavior in production; here we show a quick feedback
    // Remove the next 3 lines if you want default form behavior
    e.preventDefault();
    alert('Mensagem enviada, obrigado!');
  });
});
