// Mostrar/ocultar el menú en dispositivos móviles
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    // Mostrar/ocultar el menú al hacer clic en el botón
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        navToggle.classList.add("clicked"); // Añadir clase temporal para cambiar el color

        // Volver al color original después de un breve tiempo
        setTimeout(() => {
            navToggle.classList.remove("clicked");
        }, 200); // 200ms para que el cambio sea visible
    });

    // Ocultar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });
});

// Botón para desplazarse hacia arriba
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.textContent = "↑";
    scrollToTopBtn.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopBtn);

    // Mostrar/ocultar el botón al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    });

    // Desplazarse hacia arriba al hacer clic en el botón
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});