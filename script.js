const contenidos = {
    't1': {
        tipo: 'escritorio',
        titulo: 'LSU - Ximena Romero',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://us06web.zoom.us/j/85884799406pwd=239690', extra: 'ID: 858 8479 9406 Código: 239690' },
            { icon: 'fas fa-folder-open', label: 'Materiales (Programa)', url: 'https://drive.google.com/drive/folders/1_s95gKYRE-Ui33HWbGcVclAgeoLu3iTp?usp=drive_link' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/playlist?list=PLT1wlKr0eeJCVRcnU636Y9zh5K4nwbutq' },
            { icon: 'fas fa-file-signature', label: 'Evaluaciones', action: "mostrarCronograma('LSU')" }
        ]
    },
    't2': {
        tipo: 'escritorio',
        titulo: 'Met. INT. - Karen Ramos',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://us06web.zoom.us/j/81235619074?pwd=e0bW2zQanuU8hbxWZ5hHWUJ8CyGRHG.1', extra: 'ID: 812 3561 9074 Código: 7D7CG5' },
            { icon: 'fas fa-folder-open', label: 'Materiales', url: 'https://drive.google.com/drive/folders/1BeapDfw6ufVCG-3Ua2wx7RUrZMkWB2Re?usp=sharing' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/playlist?list=PLT1wlKr0eeJAJq5U7IE3jjdVgjje9l1TW' },
            { icon: 'fas fa-file-signature', label: 'Evaluaciones', action: "mostrarCronograma('INT')" }
        ]
    },
    't3': {
        tipo: 'escritorio',
        titulo: 'I. Español - Ana Belo',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://us05web.zoom.us/j/88990037398?pwd=puwKba2LeHPxCKezbGFGsWfsrLCKKZ.1', extra: 'ID: 889 9003 7398 Código: INCOSUR' },
            { icon: 'fas fa-folder-open', label: 'Materiales', url: 'https://drive.google.com/drive/folders/1BeapDfw6ufVCG-3Ua2wx7RUrZMkWB2Re?usp=sharing' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/' },
            { icon: 'fas fa-file-signature', label: 'Evaluaciones', action: "mostrarCronograma('ESP')" }
        ]
    },
    't4': {
        tipo: 'escritorio',
        titulo: 'Lingüística - Serrana Rodríguez',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://us06web.zoom.us/j/88354666855?pwd=8aN8v6W1i8yYHWwI6Qhw5YIVUlua4w.1', extra: 'ID: 883 5466 6855 Código: 353279' },
            { icon: 'fas fa-folder-open', label: 'Materiales', url: 'https://drive.google.com/drive/folders/1BeapDfw6ufVCG-3Ua2wx7RUrZMkWB2Re?usp=sharing' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/' },
            { icon: 'fas fa-file-signature', label: 'Evaluaciones', action: "mostrarCronograma('LING')" }
        ]
    },
    't5': {
        tipo: 'talleres',
        titulo: 'Talleres y Eventos',
        eventos: [
            {
                fecha: '16 de Mayo, 2026',
                horario: '9:30 a 13:00 hs',
                denominacion: 'Taller de Español',
                lugar: 'Espacio Colabora',
                mapa: 'https://share.google/pC3UQbpAhbA6hJsLj'
            },
            {
                fecha: '13 de Junio, 2026',
                horario: '9:00 a 17:00 hs',
                denominacion: 'Encuentro y jornada de integración',
                lugar: 'CINDE',
                mapa: 'https://share.google/4XCN1Lk5A9rUnwtr7'
            }
        ]
    },
    't6': {
        tipo: 'escritorio',
        titulo: 'Investigación',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://zoom.us/j/ejemplo2', extra: 'ID: Código: ' },
            { icon: 'fas fa-folder-open', label: 'Materiales', url: 'https://drive.google.com/drive/folders/1TRLRtJUiQhY0sC2zefJ6Gx5czzyvq18x?usp=drive_link' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/' },
            { icon: 'fas fa-file-signature', label: 'Evaluaciones', action: "mostrarCronograma('INV')" }
        ]
    },
    't7': {
        tipo: 'talleres',
        titulo: 'Prácticas',
        eventos: [
            {
                fecha: '25 de Julio, 2026',
                horario: '15:00 a 17:00 hs',
                denominacion: 'Visita guiada al Museo Andes 1972',
                lugar: 'Museo Andes',
                mapa: 'https://maps.app.goo.gl/QGCMrJNkBrE884jN9'
            },
            {
                fecha: '17 de Junio, 2026',
                horario: '15:00 a 16:00 hs',
                denominacion: 'Lanzamiento del Bachillerato para basquebolistas',
                lugar: 'Canal de Youtube INEFOP (https://youtube.com/@inefopuruguay?si=2ld6RVVfjA1NAR52',
                mapa: 'https://share.google/BoYrX6GHoVcN6i7nv'
            },
            {
                fecha: '12 de Junio, 2026',
                horario: '18:30 a 19:30 hs',
                denominacion: 'Ciclo de Charlas FHCE 2do. encuentro',
                lugar: 'Zoom FHCE',
                mapa: 'https://share.google/ZJN4CNgZLXQLLOwWQ'
            },
            {
                fecha: '30 de Mayo, 2026',
                horario: '12:00 a 13:00 hs',
                denominacion: 'Taller Automaquillaje',
                lugar: 'IG Live CINDE',
                mapa: 'https://share.google/4XCN1Lk5A9rUnwtr7'
            },
            {
                fecha: '29 de Mayo, 2026',
                horario: '18:30 a 19:30 hs',
                denominacion: 'Ciclo de Charlas FHCE 1er encuentro',
                lugar: 'Zoom FHCE',
                mapa: 'https://share.google/ZJN4CNgZLXQLLOwWQ'
            },
            {
                fecha: '16 y 17 de Mayo, 2026',
                horario: '10:00 a 18:00 hs',
                denominacion: 'Congreso Celiaquía',
                lugar: 'Torre de las Telecomunicaciones',
                mapa: 'https://share.google/NOZZux1v5B3RFMRZK'
            },
            {
                fecha: '09 de Abril, 2026',
                horario: '19:00 a 20:00 hs',
                denominacion: 'Meet Aletea: Familia y Autismo',
                lugar: 'Google Meet',
                mapa: ''
            }
        ]
    },
    't8': {
        tipo: 'documento',
        titulo: 'Horarios',
        url: 'https://drive.google.com/file/d/1glLuUCwilQfpLR0-6VNbRhDRgTI5r8X2/preview',
        subtitulo: 'Horarios 3ro. LSU',
    }
};

function toggleTile(element, id) {
    const grid = document.getElementById('grid');
    const contentArea = document.getElementById('content-area');
    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');

    if (!element.classList.contains('active')) {
        const info = contenidos[id] || { tipo: 'info', titulo: 'Sin datos', mensaje: 'No configurado.' };
        
        contentTitle.innerText = info.titulo;
        contentBody.innerHTML = ''; 

        if (info.tipo === 'escritorio') {
            contentBody.className = 'escritorio-grid';
            info.herramientas?.forEach(h => {
                if (h.action) {
                    contentBody.innerHTML += `
                        <div onclick="${h.action}" class="herramienta-item" style="cursor:pointer">
                            <i class="${h.icon}"></i>
                            <span>${h.label}</span>
                        </div>`;
                } else {
                    contentBody.innerHTML += `
                        <a href="${h.url}" target="_blank" class="herramienta-item">
                            <i class="${h.icon}"></i>
                            <span>${h.label}</span>
                            ${h.extra ? `<p>${h.extra}</p>` : ''}
                        </a>`;
                }
            });
        } 
        else if (info.tipo === 'talleres') {
            contentBody.className = 'talleres-grid';
            info.eventos?.forEach(ev => {
                contentBody.innerHTML += `
                    <div class="taller-card">
                        <div class="taller-header"><i class="far fa-calendar-alt"></i> ${ev.fecha}</div>
                        <div class="taller-body">
                            <h3>${ev.denominacion}</h3>
                            <p><i class="far fa-clock"></i> <strong>Horario:</strong> ${ev.horario}</p>
                            <p><i class="fas fa-map-marker-alt"></i> <strong>Lugar:</strong> ${ev.lugar}
                                ${ev.mapa ? `<a href="${ev.mapa}" target="_blank" class="map-link"><i class="fas fa-external-link-alt"></i></a>` : ''}
                            </p>
                        </div>
                    </div>`;
            });
        }
        else if (info.tipo === 'documento') {
            contentBody.className = 'documento-view';
            contentBody.innerHTML = `
                <div class="doc-container">
                    <button onclick="mostrarCronograma('TODO')" class="btn-playlist" style="width: 100%; display: block; margin-bottom: 20px; box-sizing: border-box;">
                        <i class="fas fa-calendar-alt"></i> Cronograma de evaluaciones
                    </button>
                    
                    <p>${info.subtitulo}</p>
                    <iframe src="${info.url}" frameborder="0"></iframe>
                    <br><a href="${info.url}" target="_blank" class="btn-main">Abrir en pantalla completa</a>
                </div>`;
        }

        grid.classList.add('blur-others');
        setTimeout(() => {
            element.classList.add('active');
            contentArea.classList.add('show');
        }, 300);
    } else {
        contentArea.classList.remove('show');
        element.classList.remove('active');
        setTimeout(() => grid.classList.remove('blur-others'), 300);
    }
}

// Función para obtener, ordenar y filtrar los datos del cronograma
function mostrarCronograma(materiaFiltro = 'TODO') {
    const contentBody = document.getElementById('content-body');
    const contentTitle = document.getElementById('content-title');
    
    contentTitle.innerText = materiaFiltro === 'TODO' ? "Cronograma General" : `Evaluaciones: ${materiaFiltro}`;
    contentBody.className = 'talleres-grid';
    contentBody.innerHTML = '';

    try {
        const datos = datosCronograma; 
        let listaFiltrada = [];

        if (materiaFiltro === 'TODO') {
            Object.keys(datos).forEach(m => {
                datos[m].forEach(ev => {
                    if (ev.fecha) { // Ignora eventos sin fecha definida
                        listaFiltrada.push({ ...ev, materia: m });
                    }
                });
            });
            // Ordenamiento cronológico seguro usando el formato AAAA-MM-DD
            listaFiltrada.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        } else {
            listaFiltrada = datos[materiaFiltro] || [];
        }

        renderizarTarjetasEvaluacion(listaFiltrada, contentBody);

    } catch (error) {
        contentBody.innerHTML = `<p>Error al procesar el cronograma: ${error.message}</p>`;
    }
}

function renderizarTarjetasEvaluacion(eventos, contenedor) {
    if (eventos.length === 0 || (eventos.length === 1 && !eventos[0].fecha)) {
        contenedor.innerHTML = "<p>No hay evaluaciones programadas.</p>";
        return;
    }

    contenedor.innerHTML = eventos.map(ev => {
        // Validación y parseo visual de la fecha de AAAA-MM-DD a DD/MM/AAAA
        let fechaExhibicion = ev.fecha;
        if (ev.fecha && ev.fecha.includes('-')) {
            const partes = ev.fecha.split('-');
            if (partes.length === 3) {
                fechaExhibicion = `${partes[2]}/${partes[1]}/${partes[0]}`;
            }
        }

        return `
            <div class="taller-card">
                <div class="taller-header">
                    <i class="far fa-calendar-alt"></i> ${fechaExhibicion} 
                    ${ev.materia ? `| <strong>${ev.materia}</strong>` : ''}
                </div>
                <div class="taller-body">
                    <h3>${ev.denominacion}</h3>
                    <p><i class="fas fa-laptop-house"></i> <strong>Modalidad:</strong> ${ev.modalidad.toUpperCase()}</p>
                    <a href="${ev.propuesta}" target="_blank" class="btn-playlist" style="margin-top:10px; display:inline-block;">
                        <i class="fas fa-file-pdf"></i> Ver Propuesta
                    </a>
                </div>
            </div>`;
    }).join('');
}
