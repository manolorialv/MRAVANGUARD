document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    // Manejo del formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Captura de datos
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Simulación de envío
            console.log('Enviando datos a MRA Vanguard:', formData);
            
            alert(Gracias ${formData.name}, nos pondremos en contacto contigo pronto.);
            contactForm.reset();
        });
    }

    // Efecto de scroll en el Navbar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('bg-slate-900', 'shadow-xl');
            nav.classList.remove('bg-slate-900/90');
        } else {
            nav.classList.remove('shadow-xl');
        }
    });
});
