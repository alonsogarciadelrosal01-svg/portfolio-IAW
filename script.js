document.addEventListener("DOMContentLoaded", () => {
    // Lógica para el menú de navegación en móviles
    const mobileToggle = document.getElementById("mobile-toggle");
    const navLinks = document.getElementById("nav-links");

    mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Alternar el icono del menú entre hamburguesa y X
        if (navLinks.classList.contains("active")) {
            mobileToggle.textContent = "✕";
        } else {
            mobileToggle.textContent = "☰";
        }
    });

    // Evento interactivo para el botón del Hero
    const actionBtn = document.getElementById("action-btn");
    actionBtn.addEventListener("click", () => {
        const servicesSection = document.getElementById("servicios");
        // Desplazamiento suave hacia la sección de servicios
        servicesSection.scrollIntoView({ behavior: "smooth" });
    });
});