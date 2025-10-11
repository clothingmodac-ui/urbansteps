// Carrusel functionality para index.html
let slideIndex = 0;
let intervalo;

function mostrarSlide(n) {
    const slides = document.getElementsByClassName("carrusel-item");
    const indicadores = document.getElementsByClassName("indicador");
    
    // Ocultar todos los slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Remover active de todos los indicadores
    for (let i = 0; i < indicadores.length; i++) {
        indicadores[i].classList.remove("active");
    }
    
    // Ajustar índice si se pasa de los límites
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    
    // Mostrar slide actual y activar indicador
    slides[slideIndex].classList.add("active");
    if (indicadores[slideIndex]) {
        indicadores[slideIndex].classList.add("active");
    }
}

function moverCarrusel(n) {
    mostrarSlide(slideIndex + n);
    resetAutoAvance();
}

function irASlide(n) {
    mostrarSlide(n);
    resetAutoAvance();
}

// Auto-avance cada 5 segundos
function autoAvance() {
    moverCarrusel(1);
}

function iniciarAutoAvance() {
    intervalo = setInterval(autoAvance, 5000);
}

function resetAutoAvance() {
    clearInterval(intervalo);
    iniciarAutoAvance();
}

// Pausar auto-avance cuando el mouse está sobre el carrusel
function configurarEventosCarrusel() {
    const carruselContainer = document.querySelector('.carrusel-container');
    if (carruselContainer) {
        carruselContainer.addEventListener('mouseenter', () => {
            clearInterval(intervalo);
        });

        carruselContainer.addEventListener('mouseleave', () => {
            iniciarAutoAvance();
        });
    }
}

// Inicializar el carrusel
document.addEventListener('DOMContentLoaded', function() {
    mostrarSlide(0);
    iniciarAutoAvance();
    configurarEventosCarrusel();
    
    console.log('✅ Carrusel inicializado correctamente');
});

// Función para redireccionar a productos con marca específica
function filtrarPorMarca(marca) {
    window.location.href = `productos.html?marca=${marca}`;
}
// Función para actualizar contadores de productos por marca
function actualizarContadoresMarcas() {
    const productosPorMarca = {
        'nike': productos.filter(p => p.marca === 'nike').length,
        'adidas': productos.filter(p => p.marca === 'adidas').length,
        'puma': productos.filter(p => p.marca === 'puma').length,
        'reebok': productos.filter(p => p.marca === 'reebok').length,
        'under-armour': productos.filter(p => p.marca === 'under-armour').length,
        'new-balance': productos.filter(p => p.marca === 'new-balance').length,
        'vans': productos.filter(p => p.marca === 'vans').length,
        'converse': productos.filter(p => p.marca === 'converse').length
    };

    // Actualizar cada tarjeta de marca
    Object.keys(productosPorMarca).forEach(marca => {
        const countElement = document.querySelector(`.marca-card[onclick*="${marca}"] .productos-count`);
        if (countElement) {
            countElement.textContent = `${productosPorMarca[marca]} producto${productosPorMarca[marca] !== 1 ? 's' : ''}`;
        }
    });
}

// Llamar la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    // ... código existente del carrusel ...
    
    // Actualizar contadores de marcas
    if (typeof productos !== 'undefined') {
        actualizarContadoresMarcas();
    }
});

/*<!-- enimacion -->*/

		
		/*<!-- enimacion -->*/