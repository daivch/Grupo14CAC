document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página
   
    // Obtener los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
   
    // Crear el contenido del archivo
    var contenido = "Nombre: " + nombre + "\nEmail: " + email + "\n";
   
    // Crear un objeto Blob con el contenido en formato de texto
    var blob = new Blob([contenido], { type: 'text/plain' });
   
    // Crear un enlace para descargar el archivo
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'formulario.txt';
   
    // Simular un clic en el enlace para iniciar la descarga
    document.body.appendChild(a);
    a.click();
 
    // Limpiar el enlace y liberar el objeto Blob
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
