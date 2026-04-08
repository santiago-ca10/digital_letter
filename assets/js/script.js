document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const statusText = document.getElementById("status-text");
    const btnGift = document.getElementById("btn-gift");
    const callOverlay = document.getElementById("video-call-overlay");

    const usuarioIG = "x_.santiago._vi"; // Cambia esto por tu usuario de Instagram

    // 1. Lógica para abrir y cerrar el sobre (solo en clics fuera de la carta)
    envelope.addEventListener("click", (e) => {
        if (!e.target.closest(".card")) {
            envelope.classList.toggle("open");

            if (envelope.classList.contains("open")) {
                statusText.textContent = "¡Sobre abierto! Ahora toca el regalo.";
            } else {
                statusText.textContent = "El sobre está cerrado. Tócalo para ver tu sorpresa.";
            }
        }
    });

    // 2. Lógica específica para el botón del regalo
    btnGift.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!envelope.classList.contains("open")) {
            statusText.textContent = "Primero abre el sobre para ver el regalo.";
            return;
        }

        statusText.textContent = "Abriendo regalo...";
        callOverlay.classList.remove("hidden");

        // Redirigir después de 3 segundos
        setTimeout(() => {
            window.location.href = `https://ig.me/m/${usuarioIG}`;
        }, 3000);
    });
});