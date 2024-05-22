function validarFormulario() {
    var formaSeleccionada = document.querySelector('input[name="forma"]:checked');
    var capasSeleccionadas = document.querySelector('select[name="capas"]').value;
    var bizcochueloSeleccionado = document.querySelector('input[name="bizcochuelo"]:checked');
    var rellenoSeleccionado = document.querySelector('input[name="relleno"]:checked');
    var coberturaSeleccionada = document.querySelector('input[name="cobertura"]:checked');
    var disenoSeleccionado = document.querySelector('input[name="diseno"]:checked');

    if (!formaSeleccionada) {
        alert('Por favor, seleccione la forma de la torta.');
        return false;
    }
    if (!capasSeleccionadas) {
        alert('Por favor, seleccione la cantidad de capas.');
        return false;
    }
    if (!bizcochueloSeleccionado) {
        alert('Por favor, seleccione el tipo de bizcochuelo.');
        return false;
    }
    if (!rellenoSeleccionado) {
        alert('Por favor, seleccione el relleno.');
        return false;
    }
    if (!coberturaSeleccionada) {
        alert('Por favor, seleccione la cobertura.');
        return false;
    }
   
    if (!disenoSeleccionado) {
        alert('Por favor, seleccione el diseño.');
        return false;
    }

    // Si todas las validaciones pasan
    return true;
}





