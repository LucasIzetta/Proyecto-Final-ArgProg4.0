/* Funcionalidad para mostrar/ocultar información complementaria */

const botonExperiencia = document.querySelector('#boton-experiencia');
const botonEducacion = document.querySelector('#boton-educacion');
const experiencia = document.querySelector('#experiencia');
const educacion = document.querySelector('#educacion');

botonExperiencia.addEventListener('click', () => {
    if (experiencia.style.display === 'none') {
        experiencia.style.display = 'block';
        botonExperiencia.innerText = 'Ocultar Experiencia';
    } else {
        experiencia.style.display = 'none';
        botonExperiencia.innerText = 'Mostrar Experiencia';
    }
});

botonEducacion.addEventListener('click', () => {
    if (educacion.style.display === 'none') {
        educacion.style.display = 'block';
        botonEducacion.innerText = 'Ocultar Educación';
    } else {
        educacion.style.display = 'none';
        botonEducacion.innerText = 'Mostrar Educación';
    }
});

/* Funcionalidad para enviar el formulario de contacto */

const formContacto = document.querySelector('#form-contacto');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const mensajeExito = document.querySelector('#mensaje-exito');

formContacto.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (nombreInput.value.trim() === '' || emailInput.value.trim() === '' || mensajeInput.value.trim() === '') {
        alert('Por favor complete todos los campos del formulario.');
    } else {
        mensajeExito.style.display = 'block';
        formContacto.reset();
    }
});