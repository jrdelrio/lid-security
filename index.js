const fotoGuardia = document.querySelector(".image-radio-guard");

const contactButtonAboutSection = document.querySelector(
    ".contact-navbar-button-about-section"
);
const aboutUsSection = document.querySelector(
    ".about-us-section .content-wrapper"
);

const copyWrite = document.querySelector(".logo-footer.copywrite.left p");
const footer = document.querySelector("footer");

const menuIcon = document.querySelector(".menu-icon");
const navbarMenu = document.querySelector(".navbar-wrapper ul");

const windowWidth = window.innerWidth;

if (true) {
    console.log("ancho de la pantalla: " + screen.width);
    console.log("ancho de la ventana: " + windowWidth);

    if (window.innerWidth <= 767) {
        console.log("Es un móvil");
    } else {
        console.log("Es un ordenador");
    }

    // footer.insertAdjacentElement("beforeend", copyWrite);
    console.log("cambiado todo");
}

function buttonToBeforeEndAboutSection() {
    if (windowWidth && windowWidth <= 767) {
        aboutUsSection.insertAdjacentElement(
            "beforeend",
            contactButtonAboutSection
        );
        console.log("botón cambiado al fondo");
    }
}

// Función para cambiar entre el footer móvil y el de escritorio
function toggleFooter() {
    const mobileFooter = document.querySelector(".mobile-footer");
    const desktopFooter = document.querySelector(".desktop-footer");

    // Detectar el ancho de la ventana
    if (window.innerWidth < 767) {
        desktopFooter.style.display = "none";
    } else {
        mobileFooter.style.display = "none";
    }
}

// Ejecutar la función al cargar la página
toggleFooter();
buttonToBeforeEndAboutSection();

// Ejecutar la función cada vez que se redimensione la ventana
window.addEventListener("resize", () => {
    toggleFooter();
    buttonToBeforeEndAboutSection();
});

// envio de datos del formulario
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
