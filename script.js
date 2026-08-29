document.addEventListener("DOMContentLoaded", () => {
    // ... (Aquí va el código del menú hamburguesa que ya tienes) ...

    const formulario = document.querySelector(".formulario");

    if (formulario) {
        // ... (Aquí va la recuperación de localStorage) ...

        /* ================= 3. VALIDACIÓN DEL TELÉFONO ================= */
        const telefonoInput = formulario.elements["telefono"];
        
        // 1. Crear el elemento visual para el mensaje de error
        const mensajeError = document.createElement("span");
        mensajeError.textContent = "Error: El teléfono solo debe contener números.";
        mensajeError.style.color = "#d9534f"; // Color rojo
        mensajeError.style.fontSize = "14px";
        mensajeError.style.marginTop = "-15px";
        mensajeError.style.marginBottom = "10px";
        mensajeError.style.display = "none"; // Oculto por defecto
        
        // Insertamos el mensaje justo después del campo de teléfono
        telefonoInput.after(mensajeError);

        // 2. Interceptar el envío del formulario
        formulario.addEventListener("submit", (evento) => {
            const valorTelefono = telefonoInput.value;

            // La expresión regular /\D/ busca cualquier carácter que NO sea un dígito (0-9)
            if (/\D/.test(valorTelefono)) {
                
                evento.preventDefault(); // ¡Detiene el envío del formulario!
                
                // Mostrar los estilos de error
                telefonoInput.style.border = "2px solid #d9534f";
                mensajeError.style.display = "block";
                
            } else {
                // Si todo está bien, ocultamos el error (por si el usuario lo corrigió)
                telefonoInput.style.border = "2px solid #C6A75E";
                mensajeError.style.display = "none";
                
                // Borramos los datos del localStorage ya que el envío fue exitoso
                const camposGuardados = ["nombre", "telefono", "direccion"];
                camposGuardados.forEach(campo => localStorage.removeItem(campo));
            }
        });
    }
});