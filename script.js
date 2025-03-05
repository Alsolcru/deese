// Obtener elementos del DOM
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const thumbnails = document.querySelectorAll(".thumbnail");

// Función para abrir el modal con fade out
function openModal(src) {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Fade out a negro
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1"; // Fade in del modal
    }, 10);
    modalImage.src = src;
}

// Función para cerrar el modal con fade in
function closeModalFunc() {
    modal.style.opacity = "0"; // Fade out del modal
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.backgroundColor = ""; // Fade in al color de fondo original
    }, 500);
}

// Abrir modal al hacer clic en una miniatura
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        openModal(thumbnail.src);
    });
});

// Cerrar modal al hacer clic en la "X"
//closeModal.addEventListener("click", closeModalFunc);

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});
