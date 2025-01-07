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

if (windowWidth && windowWidth <= 767) {
    console.log("ancho de la pantalla: " + screen.width);
    console.log("ancho de la ventana: " + window.innerWidth);

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
