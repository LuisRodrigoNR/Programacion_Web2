function generarQR() {
    // Obtener los valores de los inputs
    const nombre = document.getElementById("input1").value;
    const correo = document.getElementById("input2").value;
    const institucion = document.getElementById("input3").value;
    const dependencia = document.getElementById("input4").value;

    // Crear un texto que se convertirá en el QR
    const qrTexto = `Nombre: ${nombre}, Correo: ${correo}, Institución: ${institucion}, Dependencia: ${dependencia}`;

    // Limpiar el contenido previo del QR
    const qrCodeContainer = document.getElementById("qr-code");
    qrCodeContainer.innerHTML = "";

    // Generar el código QR usando la API de goqr.me
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrTexto)}&size=128x128`;
    
    // Crear una imagen del código QR
    const qrImage = document.createElement("img");
    qrImage.src = qrApiUrl;
    qrCodeContainer.appendChild(qrImage);
}
