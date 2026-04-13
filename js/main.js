// ─── CURSOR PERSONALIZADO ───────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Agrandar el anillo al pasar sobre elementos interactivos
document.querySelectorAll('a, button, .service-card, .step').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width = '56px';
    ring.style.height = '56px';
    ring.style.borderColor = 'rgba(0,229,160,0.7)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderColor = 'rgba(0,229,160,0.4)';
  });
});

// ─── ANIMACIONES DE ENTRADA AL SCROLL ───────────────────────────
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ─── FORMULARIO DE CONTACTO ──────────────────────────────────────
document.querySelector('.form-submit').addEventListener('click', function() {
  this.textContent = '✓ Consulta Enviada';
  this.style.background = '#00ffb3';
  setTimeout(() => {
    this.innerHTML = `Enviar Consulta
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    this.style.background = '';
  }, 3000);
});
