import banderas from "./banderas.js";

//CONSTANTES
const btnSiguiente = document.querySelector(".btn-siguiente");
const btnLimpiar = document.querySelector(".btn-limpiar");
const btnTerminar = document. querySelector(".btn-terminar");
const logo = document.querySelector(".header-index_figure_img");

let pregunta = document.querySelector(".pregunta");
let bandera = document.querySelector(".img-bandera");
let resp1 = document.querySelector(".resp1");
let resp2 = document.querySelector(".resp2");
let resp3 = document.querySelector(".resp3");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let acierto = document.querySelector("#aciertos");
let fallo = document.querySelector("#fallos");
let total = document.querySelector("#total");

let numSave = [];
let numRandom = 0;
let aciertos = 0;
let fallos = 0;


function cargarPregunta() {
    input1.checked = false;
    input2.checked = false;
    input3.checked = false;

    numRandom = Math.floor(Math.random() * banderas.length);

    if (!numSave.includes(numRandom)) {
        numSave.push(numRandom);

        console.log(numSave);
        pregunta.innerText = banderas[numRandom].question;

        bandera.src = banderas[numRandom].bandera;
        bandera.classList.add("flag");

        resp1.innerText = banderas[numRandom].a;
        resp2.innerText = banderas[numRandom].b;
        resp3.innerText = banderas[numRandom].c;

    } else {
        console.log("El número está repetido");
        cargarPregunta();
    }
}

function corregirPreguntas() {
    let correcto = banderas[numRandom].correct;

    if (input1.checked && correcto == input1.value) {
        console.log("La 1ra opción es la correcta");
        aciertos++;
        acierto.value = aciertos;
    } else if (input2.checked && correcto == input2.value) {
        console.log("La 2nda opción es la correcta");
        aciertos++;
        acierto.value = aciertos;
    } else if (input3.checked && correcto == input3.value) {
        console.log("La 3ra opción es la correcta");
        aciertos++;
        acierto.value = aciertos;
    } else {
        console.log("Mal");
        fallos++;
        fallo.value = fallos;
    }

    total.value = fallos + aciertos;
};

document.addEventListener('DOMContentLoaded', () => {
    cargarPregunta();
});

btnSiguiente.addEventListener("click", () => {

    if (numSave.length <= banderas.length) {
        corregirPreguntas();

        cargarPregunta();
    } else {
        console.log("Ya han salido todas las preguntas");
        numSave = [];
    }
});


btnLimpiar.addEventListener("click", ()=>{
    input1.checked = false;
    input2.checked = false;
    input3.checked = false;

        acierto.value = 0;
        fallo.value = 0;
        total.value = 0;
        
       
        aciertos= 0;
        fallos= 0;  
});


logo.addEventListener("click", ()=>{
    location.href = "../index.html"
});


btnTerminar.addEventListener("click", ()=>{

});



