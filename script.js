document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const statusText = document.getElementById("status-text");

    let isOpened = false;

    envelope.addEventListener("click", () => {
        isOpened = !isOpened;

        if (isOpened) {
            envelope.classList.add("open");
            statusText.textContent = "Haz clic para cerrar";
        } else {
            envelope.classList.remove("open");
            statusText.textContent = "Haz clic para abrir el sobre";
        }
    });
});