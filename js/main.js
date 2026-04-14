// main.js - MRA VANGUARD
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cMRA VANGUARD - Consultoría de Ciberseguridad cargada correctamente', 'color: #60a5fa; font-weight: bold;');

    // Smooth scroll para enlaces internos (si tienes menú)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Puedes agregar aquí animaciones de fade-in para las cards de servicios si quieres
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
