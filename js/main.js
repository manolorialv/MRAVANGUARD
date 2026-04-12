// script.js - MRA Vanguard Intelligence

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mensaje de Bienvenida en Consola (Efecto Hacker Pro)
    console.log("%c MRA VANGUARD %c v1.0 - Engineering Mode Active ", 
        "color: #000; background: #00f2ff; font-weight: bold; padding: 5px;", 
        "color: #00f2ff; background: #080a0c; padding: 5px;");

    // 2. Animación de revelado al hacer Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        revealOnScroll.observe(card);
    });

    // 3. Scroll suave para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. Efecto sutil de "Brillo" en las tarjetas
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
