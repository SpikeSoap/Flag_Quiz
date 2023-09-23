// Aquí irán todas las funcionalidades que tienen que ver con la modal


// Constantes
const modal = document.querySelector(".modal-container");
const btnClose = document.querySelector(".btn-close");
const btnEmpezar = document.querySelector(".btn-empezar");

function mostrarModal() {
    modal.style.display = "block";
}

setTimeout(mostrarModal, 2000);

btnClose.addEventListener('click', ()=>{
    modal.style.display = "none";
});

btnEmpezar.addEventListener('click', ()=>{

    window.location.href = "pages/banderas.html";
});
