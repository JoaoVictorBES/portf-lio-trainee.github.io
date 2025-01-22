/* Animaçoes menu Hamburguer */

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


AOS.init({
    duration: 1000, // Duração da animação (em milissegundos)
    once: true,
    startEvent: 'DOMContentLoaded', // Inicia as animações após o DOM estar carregado
    offset: 200 // Garante que a animação acontece apenas uma vez
  });


