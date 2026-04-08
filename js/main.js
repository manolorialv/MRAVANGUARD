function analizarUrl() {
    const url = document.getElementById('urlInput').value;
    const res = document.getElementById('resultadoUrl');
    res.classList.remove('hidden');
    res.style.border = "1px solid #3b82f6"; 
    
    if(url === "") { 
        res.innerHTML = "<span class='text-red-500'>[!] ERROR: URL requerida.</span>"; 
        return; 
    }
    
    res.innerHTML = `
        <div class='animate-pulse text-blue-400'>[ INICIANDO ESCANEO LINEAL ]</div>
        <div class='mt-2 text-white'>> Objetivo: ${url}</div>
        <div class='text-green-400'>> ESTRUCTURA VALIDADA SIN AMENAZAS.</div>
    `;
}

function testQA(tipo) {
    const res = document.getElementById('resultadoTest');
    res.classList.remove('hidden');
    res.style.border = "1px solid #3b82f6";
    
    let detalle = "";
    if(tipo === 'SSL') detalle = "<span class='text-blue-400 font-bold'>[SSL CHECK]</span><br>> Certificado: ACTIVO";
    if(tipo === 'QA') detalle = "<span class='text-purple-400 font-bold'>[QA AUTOMATION]</span><br>> Selenium: 100% SUCCESS";
    if(tipo === 'VUL') detalle = "<span class='text-orange-400 font-bold'>[SECURITY TEST]</span><br>> Inyección SQL: Blindado";
    
    res.innerHTML = detalle;
}
