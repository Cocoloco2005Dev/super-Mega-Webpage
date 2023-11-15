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

