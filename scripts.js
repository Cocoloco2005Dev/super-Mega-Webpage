function abrirFormulario() {
    var nuevaVentana = window.open("form.html", "Nueva ventana", "width=600,height=550");
}

function ajustarDesplazamiento(elementId) {
var headerHeight = document.querySelector('header').offsetHeight;
var element = document.getElementById(elementId);

if (element) {
var offsetTop = element.offsetTop - headerHeight;
window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
});
}
}

document.addEventListener('DOMContentLoaded', function () {
    const imagenContainer = document.querySelector('.imagen-container');

    imagenContainer.addEventListener('mouseenter', function () {
        imagenContainer.querySelector('img').classList.add('imagen-ampliada');
    });

    imagenContainer.addEventListener('mouseleave', function () {
        imagenContainer.querySelector('img').classList.remove('imagen-ampliada');
    });
});
