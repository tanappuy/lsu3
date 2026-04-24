const contenidos = {
    't1': {
        tipo: 'escritorio',
        titulo: 'LSU - Ximena Romero',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://us02web.zoom.us/j/81732423233?pwd=489888', extra: 'ID: 817 3242 3233 Código: 489888' },
            { icon: 'fas fa-folder-open', label: 'Materiales (Programa)', url: 'https://drive.google.com/drive/folders/1_s95gKYRE-Ui33HWbGcVclAgeoLu3iTp?usp=drive_link' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/playlist?list=PLT1wlKr0eeJCVRcnU636Y9zh5K4nwbutq' },
            { icon: 'fas fa-file-signature', label: 'Propuestas de Trabajo', url: 'https://drive.google.com/trabajosA' }
        ]
    },
    't2': {
        tipo: 'escritorio',
        titulo: 'Met. INT. - Karen Ramos',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://us06web.zoom.us/j/81235619074?pwd=e0bW2zQanuU8hbxWZ5hHWUJ8CyGRHG.1', extra: 'ID: 812 3561 9074 Código: 7D7CG5' },
            { icon: 'fas fa-folder-open', label: 'Materiales', url: 'https://drive.google.com/drive/folders/1BeapDfw6ufVCG-3Ua2wx7RUrZMkWB2Re?usp=sharing' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/playlist?list=PLT1wlKr0eeJAJq5U7IE3jjdVgjje9l1TW' },
            { icon: 'fas fa-file-signature', label: 'Trabajos', url: 'https://drive.google.com/trabajosB' }
        ]
    },
    't3': {
        tipo: 'escritorio',
        titulo: 'I. Español - Ana Belo',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://us05web.zoom.us/j/88990037398?pwd=puwKba2LeHPxCKezbGFGsWfsrLCKKZ.1', extra: 'ID: 889 9003 7398 Código: INCOSUR' },
            { icon: 'fas fa-folder-open', label: 'Materiales', url: 'https://drive.google.com/drive/folders/1BeapDfw6ufVCG-3Ua2wx7RUrZMkWB2Re?usp=sharing' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/' },
            { icon: 'fas fa-file-signature', label: 'Trabajos', url: 'https://drive.google.com/trabajosB' }
        ]
    },
    't4': {
        tipo: 'escritorio',
        titulo: 'Lingüística - Serrana Rodríguez',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://us06web.zoom.us/j/84737209592?pwd=Ws9FEgEFuQrS2DyMoXSOdY2t7l4OmK.1', extra: 'ID: 847 3720 9592 Código: 089430' },
            { icon: 'fas fa-folder-open', label: 'Materiales', url: 'https://drive.google.com/drive/folders/1BeapDfw6ufVCG-3Ua2wx7RUrZMkWB2Re?usp=sharing' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/' },
            { icon: 'fas fa-file-signature', label: 'Trabajos', url: 'https://drive.google.com/trabajosB' }
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
                mapa: ''
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
            { icon: 'fas fa-file-signature', label: 'Trabajos', url: 'https://drive.google.com/trabajosB' }
        ]
    },
    't7': {
        tipo: 'escritorio',
        titulo: 'Prácticas',
        herramientas: [
            { icon: 'fas fa-video', label: 'Reunión Zoom', url: 'https://zoom.us/j/ejemplo2', extra: 'ID: Código: ' },
            { icon: 'fas fa-folder-open', label: 'Materiales', url: 'https://drive.google.com/drive/folders/1L6kqHnsYIHMMTQMmH3GnsHTGFPrfhan7?usp=drive_link' },
            { icon: 'fab fa-youtube', label: 'Canal de YouTube', url: 'https://www.youtube.com/' },
            { icon: 'fas fa-file-signature', label: 'Trabajos', url: 'https://drive.google.com/trabajosB' }
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
                contentBody.innerHTML += `
                    <a href="${h.url}" target="_blank" class="herramienta-item">
                        <i class="${h.icon}"></i>
                        <span>${h.label}</span>
                        ${h.extra ? `<p>${h.extra}</p>` : ''}
                    </a>`;
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