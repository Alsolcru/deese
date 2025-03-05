// Obtener elementos del DOM
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const thumbnails = document.querySelectorAll(".thumbnail");

// Abrir modal al hacer clic en una miniatura
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = thumbnail.src;
    });
});

// Cerrar modal al hacer clic en la "X"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});