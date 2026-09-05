document.addEventListener("DOMContentLoaded", () => {
    
    /* ================= 1. MENÚ HAMBURGUESA ================= */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Cerrar el menú al hacer clic en un enlace (ideal para móviles)
        const navLinks = document.querySelectorAll(".header__link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    /* ================= 2. CARRUSEL ================= */
    const pista = document.getElementById("pista");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");

    if (pista && btnPrev && btnNext) {
        let index = 0;
        const imagenes = document.querySelectorAll(".carrusel__img");
        const totalImagenes = imagenes.length;

        btnNext.addEventListener("click", () => {
            index = (index + 1) % totalImagenes; // Vuelve al inicio si llega al final
            pista.style.transform = `translateX(-${index * 100}%)`;
        });

        btnPrev.addEventListener("click", () => {
            index = (index - 1 + totalImagenes) % totalImagenes; // Va al final si está en el inicio
            pista.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    /* ================= 3. VALIDACIÓN DEL FORMULARIO ================= */
    const formulario = document.querySelector(".formulario");

    if (formulario) {
        const telefonoInput = formulario.elements["telefono"];
        
        const mensajeError = document.createElement("span");
        mensajeError.textContent = "Error: El teléfono solo debe contener números.";
        mensajeError.style.color = "#d9534f"; 
        mensajeError.style.fontSize = "14px";
        mensajeError.style.marginTop = "-15px";
        mensajeError.style.marginBottom = "10px";
        mensajeError.style.display = "none"; 
        
        telefonoInput.after(mensajeError);

        formulario.addEventListener("submit", (evento) => {
            const valorTelefono = telefonoInput.value;

            if (/\D/.test(valorTelefono)) {
                evento.preventDefault(); 
                telefonoInput.style.border = "2px solid #d9534f";
                mensajeError.style.display = "block";
            } else {
                telefonoInput.style.border = "2px solid #C6A75E";
                mensajeError.style.display = "none";
            }
        });
    }
});