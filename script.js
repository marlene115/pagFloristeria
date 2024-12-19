function accion() {
    console.log('Botón funcionando correctamente');

    let ancla = document.getElementsByClassName('nav-enlace');

    for (let i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle('desaparece');
    }
}