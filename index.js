
// indentifico el tipo de device
function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detectar dispositivos iOS o Android
    if (/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
        return true; // Es un dispositivo móvil
    }

    return false; // No es un dispositivo móvil
}

if (isMobileDevice()) {
    console.log("La página se está abriendo desde un móvil.");
    console.log("Ancho de pantalla:", screen.width);
    console.log("Ancho de ventana:", window.innerWidth, "OMITIR");
} else {
    console.log("La página se está abriendo desde un ordenador.");
    console.log("Ancho de pantalla:", screen.width);
    console.log("Ancho de ventana:", window.innerWidth);
}


// funcionalidad del formulario
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa EmailJS con tu user ID
    const USER_ID = "-yxxv8md0PULJcOgX";
    const SERVICE_ID = "service_qqo52pi";
    const TEMPLATE_ID = "template_dti6y4e";

    emailjs.init(USER_ID);

    const form = document.querySelector("form");
    const button = form.querySelector("button[type='submit']");
    const inputs = form.querySelectorAll("input, textarea");

    // Validación de campos
    function validateForm() {
        let valid = true;
        inputs.forEach((input) => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });
        return valid;
    }

    // Envío de datos a EmailJS
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        button.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Enviando...`;
        button.disabled = true;

        const formData = {
            from_name: form.name.value,
            from_email: form.email.value,
            from_phone: form.phone.value,
            from_company: form.company.value,
            from_message: form.message.value,
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);
            alert("¡Mensaje enviado exitosamente!");
            form.reset();
        } catch (error) {
            console.error("Error al enviar mensaje:", error);
            alert("Hubo un error al enviar tu mensaje. Intenta nuevamente.");
        } finally {
            button.textContent = "Enviar";
            button.disabled = false;
        }
    });

    // Indicadores visuales para errores
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim()) {
                input.classList.remove("error");
            }
        });
    });
});



// Seleccionar los elementos necesarios
const aboutUsSection = document.getElementById("about-us-section");
const button = aboutUsSection.querySelector(".contact-navbar-button");
const paragraphs = aboutUsSection.querySelectorAll("p");

// Función para mover el botón basado en el ancho de la ventana
function adjustButtonPosition() {
    if (window.innerWidth < 767) {
        // Mover el botón debajo del último párrafo si aún no está ahí
        const lastParagraph = paragraphs[paragraphs.length - 1];
        if (lastParagraph.nextElementSibling !== button) {
            lastParagraph.after(button);
        }
    } else {
        // Restaurar el botón a su posición original si no está ahí
        const contentWrapper = aboutUsSection.querySelector(".content-wrapper");
        const titleButton = contentWrapper.querySelector(".title-button");
        if (titleButton && titleButton.contains(button) === false) {
            titleButton.appendChild(button);
        }
    }
}

// Ejecutar la función al cargar la página
adjustButtonPosition();

// Agregar un event listener para escuchar los cambios de tamaño de la ventana
window.addEventListener("resize", adjustButtonPosition);



// Seleccionar todos los enlaces del navbar que tienen href comenzando con "#"
const navbarLinks = document.querySelectorAll('.navbar-footer a[href^="#"]');

// Agregar un event listener a cada enlace
navbarLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevenir la acción predeterminada (recargar página)
        
        // Obtener la sección destino usando el atributo href del enlace
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Hacer scroll suave hacia la sección
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
