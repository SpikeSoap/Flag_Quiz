const modal = document.querySelector(".modal-container");
const btnClose = document.querySelector(".btn-close");
const btnEmpezar = document.querySelector(".btn-empezar");
const btnTerminar = document.querySelector(".btn-terminar");

btnTerminar.addEventListener("click", ()=>{
    modal.style.display = "block";
}) 
    

btnClose.addEventListener('click', ()=>{
    modal.style.display = "none";
});

btnEmpezar.addEventListener('click', ()=>{

    window.location.href = "../index.html";
});