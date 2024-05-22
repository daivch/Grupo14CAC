
function generarFormulario() {
    // Obtener los valores seleccionados
    var forma = document.querySelector('input[name="forma"]:checked');
    var capas = document.querySelector('select[name="capas"]').value;
    var bizcochuelo = document.querySelector('input[name="bizcochuelo"]:checked');
    var relleno = document.querySelector('input[name="relleno"]:checked');
    var cobertura = document.querySelector('input[name="cobertura"]:checked');
    var colorMasapan = document.querySelector('input[name="color-masapan"]:checked');
    var diseno = document.querySelector('input[name="diseno"]:checked');

    // Crear el formulario
    var formularioHTML = '<form>';
    formularioHTML += '<h2>Detalles del Pedido</h2>';
    formularioHTML += '<p>Forma de la Torta: ' + (forma ? forma.value : 'No especificado') + '</p>';
    formularioHTML += '<p>Cantidad de Capas: ' + capas + '</p>';
    formularioHTML += '<p>Tipo de Bizcochuelo: ' + (bizcochuelo ? bizcochuelo.value : 'No especificado') + '</p>';
    formularioHTML += '<p>Relleno: ' + (relleno ? relleno.value : 'No especificado') + '</p>';
    formularioHTML += '<p>Cobertura: ' + (cobertura ? cobertura.value : 'No especificado') + '</p>';
    if (cobertura && cobertura.value === 'masapan' && colorMasapan) {
        formularioHTML += '<p>Color del Mazapán: ' + colorMasapan.value + '</p>';
    }
    formularioHTML += '<p>Diseño: ' + (diseno ? diseno.value : 'No especificado') + '</p>';
    formularioHTML += '</form>';

    // Mostrar el formulario generado
    document.getElementById('formulario').innerHTML = formularioHTML;
}

// Detectar cambios en las opciones y generar el formulario
var opciones = document.querySelectorAll('.opciones input, .opciones select');
opciones.forEach(function(opcion) {
    opcion.addEventListener('change', generarFormulario);
});

// Función para mostrar el popup de selección de personaje (solo como ejemplo, debes implementar tu propia lógica)
function mostrarPopUp() {
    alert('Popup de selección de personaje');
}
