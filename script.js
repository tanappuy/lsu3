const contenidos = {
    't1': {
        titulo: 'LSU - Ximena Romero',
        zoom: 'https://us02web.zoom.us/j/81732423233?pwd=489888',
		zoomdata: 'ID: 817 3242 3233 Código: 489888',
        materiales: 'https://drive.google.com/drive/folders/1_s95gKYRE-Ui33HWbGcVclAgeoLu3iTp?usp=drive_link',
        youtube: 'https://www.youtube.com/playlist?list=PLT1wlKr0eeJCVRcnU636Y9zh5K4nwbutq',
        trabajos: 'https://drive.google.com/trabajosA'
    },
    't2': {
        titulo: 'Met. INT. - Karen Ramos',
        zoom: 'https://us06web.zoom.us/j/81235619074?pwd=e0bW2zQanuU8hbxWZ5hHWUJ8CyGRHG.1',
		zoomdata: 'ID: 812 3561 9074 Código: 7D7CG5',
        materiales: 'https://drive.google.com/drive/folders/1BeapDfw6ufVCG-3Ua2wx7RUrZMkWB2Re?usp=sharing',
        youtube: 'https://www.youtube.com/playlist?list=PLT1wlKr0eeJAJq5U7IE3jjdVgjje9l1TW',
        trabajos: 'https://drive.google.com/trabajosB'
    },
    't3': {
        titulo: 'I. Español - Ana Belo',
        zoom: 'https://us05web.zoom.us/j/88990037398?pwd=puwKba2LeHPxCKezbGFGsWfsrLCKKZ.1',
		zoomdata: 'ID: 889 9003 7398 Código: INCOSUR',
        materiales: 'https://drive.google.com/drive/folders/1b9nGZ84CJ01z8Y0xQczOeKrcPyNSIeSy?usp=drive_link',
        youtube: 'https://youtube.com/',
        trabajos: 'https://drive.google.com/trabajosB'
    },
    't4': {
        titulo: 'Lingüística - Serrana Rodríguez',
        zoom: 'https://us06web.zoom.us/j/84737209592?pwd=Ws9FEgEFuQrS2DyMoXSOdY2t7l4OmK.1',
		zoomdata: 'ID: 847 3720 9592 Código: 089430',
        materiales: 'https://drive.google.com/drive/folders/1w3ob-4M3Tp7TbFbjZGd_rLqTQhRE7We7?usp=drive_link',
        youtube: 'https://youtube.com/',
        trabajos: 'https://drive.google.com/trabajosB'
    },
    't5': {
        titulo: 'Talleres',
        zoom: 'https://zoom.us/j/ejemplo2',
		zoomdata: 'ID: Código:',
        materiales: 'https://drive.google.com/drive/folders/1sBng7sJWMH8OhnoUCQESW8nWUwqiRpPb?usp=drive_link',
        youtube: 'https://youtube.com/',
        trabajos: 'https://drive.google.com/trabajosB'
    },
    't6': {
        titulo: 'Investigación',
        zoom: 'https://zoom.us/j/ejemplo2',
		zoomdata: 'ID: Código:',
        materiales: 'https://drive.google.com/drive/folders/1TRLRtJUiQhY0sC2zefJ6Gx5czzyvq18x?usp=drive_link',
        youtube: 'https://youtube.com/',
        trabajos: 'https://drive.google.com/trabajosB'
    },
    't7': {
        titulo: 'Prácticas',
        zoom: 'https://zoom.us/j/ejemplo2',
		zoomdata: 'ID: Código:',
        materiales: 'https://drive.google.com/drive/folders/1L6kqHnsYIHMMTQMmH3GnsHTGFPrfhan7?usp=drive_link',
        youtube: 'https://www.youtube.com/playlist?list=PLT1wlKr0eeJAn0LGc91DEd7bXzmnf3Rh2',
        trabajos: 'https://drive.google.com/trabajosB'
    },
    't8': {
        titulo: 'Horarios',
        zoom: 'https://zoom.us/j/ejemplo2',
		zoomdata: 'ID: Código:',
        materiales: 'https://drive.google.com/drive/folders/1MYDqDXh3y1F1ikFP_OkT85MxA3xL634J?usp=drive_link',
        youtube: 'https://youtube.com/',
        trabajos: 'https://drive.google.com/trabajosB'
    },
    // Agrega t3, t4... t8 siguiendo el mismo formato
};

function toggleTile(element, id) {
    const grid = document.getElementById('grid');
    const contentArea = document.getElementById('content-area');
    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');

    if (!element.classList.contains('active')) {
        const info = contenidos[id] || { titulo: 'Sin datos', zoom: '#', materiales: '#', youtube: '#', trabajos: '#' };
        
        contentTitle.innerText = info.titulo;
        
        // Inyectamos el grid de 4 herramientas
        contentBody.innerHTML = `
            <a href="${info.zoom}" target="_blank" class="herramienta-item">
                <i class="fas fa-video"></i>
                <span>Reunión Zoom</span>
				<p>${info.zoomdata}</p>
            </a>
            <a href="${info.materiales}" target="_blank" class="herramienta-item">
                <i class="fas fa-folder-open"></i>
                <span>Materiales (Programa)</span>
            </a>
            <a href="${info.youtube}" target="_blank" class="herramienta-item">
                <i class="fab fa-youtube"></i>
                <span>Canal de YouTube</span>
            </a>
            <a href="${info.trabajos}" target="_blank" class="herramienta-item">
                <i class="fas fa-file-signature"></i>
                <span>Propuestas de Trabajo</span>
            </a>
        `;

        grid.classList.add('blur-others');
        
        setTimeout(() => {
            element.classList.add('active');
            contentArea.classList.add('show');
        }, 300);
    } else {
        contentArea.classList.remove('show');
        element.classList.remove('active');
        
        setTimeout(() => {
            grid.classList.remove('blur-others');
        }, 300);
    }
}