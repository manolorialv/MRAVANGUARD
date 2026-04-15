// Tailwind script ya está en el HTML
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu')
  const icon = document.getElementById('menu-icon')
  menu.classList.toggle('hidden')
  icon.classList.toggle('fa-bars')
  icon.classList.toggle('fa-xmark')
}

// Simulador de Diagnóstico
function runDiagnosis() {
  const input = document.getElementById('url-input').value.trim() || "tudominio.com"
  const resultDiv = document.getElementById('diagnosis-result')
  
  resultDiv.classList.remove('hidden')
  resultDiv.innerHTML = `
    <div class="flex items-center justify-center gap-3 mb-6">
      <div class="animate-spin w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full"></div>
      <p class="text-cyan-400 font-medium">Analizando superficie de ataque de <span class="font-mono">${input}</span></p>
    </div>
  `

  setTimeout(() => {
    resultDiv.innerHTML = `
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center">
          <p class="text-6xl font-bold text-emerald-400">87</p>
          <p class="text-sm text-zinc-400">Puntuación de seguridad</p>
        </div>
        <div>
          <p class="font-medium mb-3">Vulnerabilidades detectadas</p>
          <ul class="text-sm space-y-2">
            <li class="flex justify-between"><span>Exposición de puertos legacy</span><span class="text-amber-400">Media</span></li>
            <li class="flex justify-between"><span>Certificados SSL débiles</span><span class="text-red-400">Alta</span></li>
            <li class="flex justify-between"><span>API sin autenticación</span><span class="text-emerald-400">Baja</span></li>
          </ul>
        </div>
        <div class="bg-zinc-950 rounded-2xl p-6 text-sm leading-relaxed">
          <p class="font-medium mb-4 text-cyan-400">Recomendación inmediata:</p>
          <p>Tu sistema legacy presenta riesgos altos de explotación. Te contactaremos en las próximas 24 h con el diagnóstico completo y roadmap personalizado.</p>
          <button onclick="window.location.href='https://wa.me/51999999999'" 
                  class="mt-6 w-full bg-cyan-400 text-zinc-950 py-4 rounded-2xl font-semibold">
            Recibir diagnóstico completo por WhatsApp
          </button>
        </div>
      </div>
    `
  }, 1800)
}

// Scroll suave a secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

console.log('%c✅ MRA VANGUARD - Landing lista para facturar', 'color:#22d3ee; font-size:13px')
