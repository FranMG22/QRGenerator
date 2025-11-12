// Esperar a que todo el contenido del HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Obtener referencias a los elementos del HTML
    const urlInput = document.getElementById("urlInput");
    const generateBtn = document.getElementById("generateBtn");
    const qrContainer = document.getElementById("qrcode");

    // 2. Añadir un evento al botón para que "escuche" los clics
    generateBtn.addEventListener("click", () => {
        generarQR();
    });

    // 3. Opcional: Permitir generar el QR al presionar "Enter" en el input
    urlInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            generarQR();
        }
    });

    // 4. Función principal para generar el QR
    function generarQR() {
        // Obtener el valor del input y quitar espacios en blanco
        const url = urlInput.value.trim();

        // Verificar si el campo no está vacío
        if (url === "") {
            alert("Por favor, ingresa un enlace o texto.");
            return; // No hacer nada si está vacío
        }

        // Limpiar el contenedor de QR anterior (si existe)
        qrContainer.innerHTML = "";

        // Crear una nueva instancia de QRCode
        // QRCode() es una función que viene de la biblioteca que importamos
        new QRCode(qrContainer, {
            text: url,         // El texto o URL para el QR
            width: 200,        // Ancho del QR en píxeles
            height: 200,       // Alto del QR en píxeles
            colorDark: "#000000",   // Color del QR
            colorLight: "#ffffff", // Color del fondo
            correctLevel: QRCode.CorrectLevel.H // Nivel de corrección de errores
        });

        // Opcional: Limpiar el campo de entrada después de generar
        // urlInput.value = ""; 
    }
});