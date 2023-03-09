const botonDesplazar = document.querySelector('#boton');

botonDesplazar.addEventListener('click', () => {
    console.log("funciona el botyon");
    // Obtener la posición de la sección a la que se desea desplazar
    const seccionADesplazarse = document.querySelector('#Technologies');
    const posicionSeccion = seccionADesplazarse.offsetTop;

    //Hacer scroll hacia la sección
    window.scrollTo({
        top: posicionSeccion,
        behavior: 'smooth'
    });
});
