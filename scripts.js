function abrirFormulario() {
    var nuevaVentana = window.open("form.html", "Nueva ventana", "width=600,height=550");
}

function ajustarDesplazamiento(elementId) {
    console.log("TEST EXECUTED");
    var headerHeight = document.querySelector('header').offsetHeight;
    console.log(headerHeight);
    var element = document.getElementById(elementId);
    console.log(element);
  

    if (element) {
      var offsetTop = element.offsetTop - headerHeight;
      console.log(offsetTop);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }