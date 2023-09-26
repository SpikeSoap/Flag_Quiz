 import banderas from "./banderas.js";


//CONSTANTES
const cargaPregunta = document.querySelector(".carga-pregunta");
const btnSiguiente = document.querySelector(".btn-siguiente");

let pregunta = document.querySelector(".pregunta");
let bandera = document.querySelector(".img-bandera");
let resp1 = document.querySelector(".resp1");
let resp2 = document.querySelector(".resp2");
let resp3 = document.querySelector(".resp3");
let numRandom = 0;
let numSave = [];


function cargarPregunta() {

    numRandom = Math.floor(Math.random() * banderas.length);

    if (!numSave.includes(numRandom)) {
        numSave.push(numRandom);

        console.log(numSave);
        pregunta.innerText = banderas[numRandom].question;

        bandera.src = banderas[numRandom].url;
        bandera.classList.add("flag");

        resp1.innerText = banderas[numRandom].a;
        resp2.innerText = banderas[numRandom].b;
        resp3.innerText = banderas[numRandom].c;

    } else {
        console.log("El número está repetido");
        cargarPregunta();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    cargarPregunta();
});

btnSiguiente.addEventListener("click", () => {

    if (numSave.length === banderas.length) {
        console.log("Ya han salido todas las preguntas");
        numSave = [];
    }else{
        cargarPregunta();
    }
});

