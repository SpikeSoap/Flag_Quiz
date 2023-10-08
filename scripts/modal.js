// Aquí irán todas las funcionalidades que tienen que ver con la modal


// Constantes
const modal = document.querySelector(".modal-container");
const btnClose = document.querySelector(".btn-close");
const btnEmpezar = document.querySelector(".btn-empezar");
const logo = document.querySelector(".header-index_figure_img");

function mostrarModal() {
    modal.style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(mostrarModal, 1000);

});

logo.addEventListener("click", ()=>{
    setTimeout(mostrarModal, 1000);
})

btnClose.addEventListener('click', ()=>{
    modal.style.display = "none";
});

btnEmpezar.addEventListener('click', ()=>{

    window.location.href = "pages/banderas.html";
});
