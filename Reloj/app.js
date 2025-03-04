setInterval(establecerReloj, 1000);

const manecillaHora = document.querySelector('[data-manecilla-hora]');
const manecillaMinuto = document.querySelector('[data-manecilla-minuto]');
const manecillaSegundo = document.querySelector('[data-manecilla-segundo]');

function establecerReloj(){
    const fechaActual = new Date();
    const proporcionSegundos = fechaActual.getSeconds() / 60;
    const proporcionMinutos = (proporcionSegundos + fechaActual.getMinutes()) / 60;
    const proporcionHoras = (proporcionMinutos + fechaActual.getHours()) / 12;
    establecerRotacion(manecillaSegundo, proporcionSegundos);
    establecerRotacion(manecillaMinuto, proporcionMinutos);
    establecerRotacion(manecillaHora, proporcionHoras);
}

function establecerRotacion(elemento, proporcionRotacion){
    elemento.style.setProperty('--rotacion', proporcionRotacion * 360);
}

establecerReloj();
