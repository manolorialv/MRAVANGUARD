document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const vanguardForm = document.getElementById('vanguardForm');
    const scanBtn = document.getElementById('scanBtn');
    const resultsArea = document.getElementById('resultsArea');

    // 1. Manejo del Navbar Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('glass', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('glass', 'py-2');
            navbar.classList.add('py-4');
        }
    });

    // 2. Simulador de Laboratorio (Cybersec & QA)
    if (scanBtn) {
        scanBtn.addEventListener('click', () => {
            const url = document.getElementById('targetUrl').value;
            if (!url) {
                alert("Por favor, ingresa una URL válida para analizar.");
                return;
            }

            // Estado de carga
            scanBtn.disabled = true;
            scanBtn.innerHTML = '<i class="fas fa-spinner animate-spin"></i> <span>ANALIZANDO...</span>';
            resultsArea.classList.add('hidden');

            setTimeout(() => {
                renderAuditResults(url);
                scanBtn.disabled = false;
                scanBtn.innerHTML = '<i class="fas fa-microscope"></i> <span>Analizar URL</span>';
                resultsArea.classList.remove('hidden');
                resultsArea.classList.add('animate-fade-in');
                resultsArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 2000);
        });
    }

    function renderAuditResults(url) {
        const secContainer = document.getElementById('securityMetrics');
        const qaContainer = document.getElementById('qaMetrics');

        const secData = [
            { label: 'SSL Certificate', val: 'Valid (2048-bit)', color: 'text-green-400' },
            { label: 'Vulnerabilidades XSS', val: '1 Crítica detectada', color: 'text-red-500' },
            { label: 'Inyección SQL', val: 'Riesgo Moderado', color: 'text-yellow-400' },
            { label: 'Headers de Seguridad', val: 'Incompletos', color: 'text-red-400' }
        ];

        const qaData = [
            { label: 'Tiempo de Carga', val: '0.9s (Óptimo)', color: 'text-green-400' },
            { label: 'Pruebas Unitarias', val: '92% Cobertura', color: 'text-blue-400' },
            { label: 'Responsive Design', val: 'Cumple (Mobile-First)', color: 'text-green-400' },
            { label: 'Errores en Consola', val: '2 Warnings', color: 'text-yellow-400' }
        ];

        const generateRow = (data) => data.map(item => `
            <div class="flex justify-between items-center bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                <span class="text-slate-400 text-xs uppercase font-bold tracking-tighter">${item.label}</span>
                <span class="font-bold text-sm ${item.color}">${item.val}</span>
            </div>
        `).join('');

        secContainer.innerHTML = generateRow(secData);
        qaContainer.innerHTML = generateRow(qaData);
    }

    // 3. Manejo del Formulario de Contacto
    if (vanguardForm) {
        vanguardForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = vanguardForm.querySelector('button');
            
            submitBtn.disabled = true;
            submitBtn.innerText = "ENVIANDO DATOS...";

            const contactData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            console.log("MRA Vanguard ha recibido una nueva solicitud:", contactData);

            setTimeout(() => {
                alert(Solicitud recibida, ${contactData.name}. Un analista se pondrá en contacto pronto.);
                vanguardForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = "ENVIAR A MRA VANGUARD";
            }, 1500);
        });
    }
});
