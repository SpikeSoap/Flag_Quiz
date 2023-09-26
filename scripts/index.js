/**
 * Hacer un primer ejercicio donde simplemente hago que se carguen todas las banderas
 */

import banderas from "./banderas.js";

const cargaBanderas = document.querySelector(".carga-banderas");
const logo = document.querySelector(".header-index_figure_img");

// Botones del nav del menú
const europaBtn = document.querySelector(".europa-btn");
const africaBtn = document.querySelector(".africa-btn");
const asiaBtn = document.querySelector(".asia-btn");
const americaBtn = document.querySelector(".america-btn");
const oceaniaBtn = document.querySelector(".oceania-btn");

// Cargar el listado de banderas
function cargarBanderas(){
    for (let i = 0; i < banderas.length; i++) {
        let artBandera = document.createElement('article');
        artBandera.className = "artBandera";
        cargaBanderas.append(artBandera);

        let titleBandera = document.createElement('h3');
        titleBandera.innerText = banderas[i].nombre;
        artBandera.appendChild(titleBandera);

        let flag = document.createElement('img');
        flag.src = banderas[i].bandera;
        flag.className = "flag";
        artBandera.appendChild(flag);

        let capital = document.createElement('p');
        capital.innerText = banderas[i].capital;
        artBandera.appendChild(capital);
    }
};

function borrarBanderas(){
    cargaBanderas.innerHTML = "";
}

document.addEventListener('DOMContentLoaded', () => {
    cargarBanderas();

});


//Cargar todas las banderas cuando click en la imágen del logo
logo.addEventListener("click", ()=>{

    borrarBanderas();
    cargarBanderas();
});

//Se cargan solo las banderas que corresponden
function matchBanderas(flagMatch){

    for (let i = 0; i < flagMatch.length; i++) {
        let artBandera = document.createElement('article');
        artBandera.className = "artBandera";
        cargaBanderas.append(artBandera);

        let titleBandera = document.createElement('h3');
        titleBandera.innerText = flagMatch[i].nombre;
        artBandera.appendChild(titleBandera);

        let flag = document.createElement('img');
        flag.src = flagMatch[i].bandera;
        flag.className = "flag";
        artBandera.appendChild(flag);

        let capital = document.createElement('p');
        capital.innerText = flagMatch[i].capital;
        artBandera.appendChild(capital);
    }
}

//Borramos el botón del nav seleccionado
function borrarSelecionado() {
    europaBtn.classList.remove('nav-seleccionado');
    africaBtn.classList.remove('nav-seleccionado');
    asiaBtn.classList.remove('nav-seleccionado');
    americaBtn.classList.remove('nav-seleccionado');
    oceaniaBtn.classList.remove('nav-seleccionado');
}

// Botón Europa del nav
europaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "Europa");
    matchBanderas(flagMatch);
   
    borrarSelecionado();
    europaBtn.classList.add('nav-seleccionado');
});

// Botón África del nav
africaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "Africa");
    matchBanderas(flagMatch);

    borrarSelecionado();
    africaBtn.classList.add('nav-seleccionado');
});


// Botón Asia del nav
asiaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "Asia");
    matchBanderas(flagMatch);

    borrarSelecionado();
    asiaBtn.classList.add('nav-seleccionado');
});


// Botón América del nav
americaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "America");
    matchBanderas(flagMatch);

    borrarSelecionado();
    americaBtn.classList.add('nav-seleccionado');
});


// Botón Oceanía del nav
oceaniaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "Oceania");
    matchBanderas(flagMatch);

    borrarSelecionado();
    oceaniaBtn.classList.add('nav-seleccionado');
});


