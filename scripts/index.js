/**
 * Hacer un primer ejercicio donde simplemente hago que se carguen todas las banderas
 */

import banderas from "./banderas.js";

const cargaBanderas = document.querySelector(".carga-banderas");
const logo = document.querySelector(".header-index_figure_img");
const containerIndex = document.querySelector(".container-index");
const europaBtn = document.querySelector(".europa-btn");
const africaBtn = document.querySelector(".africa-btn");
const asiaBtn = document.querySelector(".asia-btn");
const americaBtn = document.querySelector(".america-btn");
const oceaniaBtn = document.querySelector(".oceania-btn");

// Prueba para el paginado de las banderas
let pagActual = 1;
const elementoPorPag = 12;

document.addEventListener('DOMContentLoaded', () => {
    cargarBanderas();

});

function borrarBanderas() {
    cargaBanderas.innerHTML = "";
}

// Cargar el listado de banderas
function cargarBanderas() {
    borrarBanderas();

    let inicio = (pagActual - 1) * elementoPorPag;
    let fin = pagActual * elementoPorPag;

    for (let i = inicio; i < fin && i < banderas.length; i++) {
        const artBandera = document.createElement('article');
        artBandera.className = "artBandera";
        cargaBanderas.append(artBandera);

        const titleBandera = document.createElement('h3');
        titleBandera.innerText = banderas[i].nombre;
        titleBandera.className = "flag-des";
        artBandera.appendChild(titleBandera);

        const flag = document.createElement('img');
        flag.src = banderas[i].bandera;
        flag.className = "flag";
        artBandera.appendChild(flag);

        const capital = document.createElement('p');
        capital.innerText = banderas[i].capital;
        capital.className = "flag-des";
        artBandera.appendChild(capital);
    }

    mostrarNumerosDePagina();
};

function mostrarNumerosDePagina() {
    const totalPaginas = Math.ceil(banderas.length / elementoPorPag);

    // Crea un elemento div para mostrar los números de página.
    const paginacion = document.createElement('div');
    paginacion.className = 'paginacion';
    cargaBanderas.append(paginacion);

    const lineaSup = document.createElement('hr');
    lineaSup.classList = "lineaSup";
    paginacion.appendChild(lineaSup);

    for (let i = 1; i <= totalPaginas; i++) {
       
        const numeroPagina = document.createElement('span');
        numeroPagina.innerText = i;
        numeroPagina.className = i === pagActual ? 'pagina-actual' : '';

        // Agrega un event listener para cambiar la página al hacer clic en un número.
        numeroPagina.addEventListener('click', () => {
            pagActual = i;
            cargarBanderas();
            mostrarNumerosDePagina();
        });

        paginacion.appendChild(numeroPagina);
    }

    // Borra cualquier paginación anterior y agrega la nueva.
    const paginacionAnterior = document.querySelector('.paginacion');
    if (paginacionAnterior) {
        paginacionAnterior.remove();
    }
    cargaBanderas.appendChild(paginacion);
}




//Cargar todas las banderas cuando click en la imágen del logo
logo.addEventListener("click", () => {

    borrarBanderas();
    cargarBanderas();
    borrarSelecionado();

    containerIndex.classList.remove('container-index_selec');
});

//Se cargan solo las banderas que corresponden
function matchBanderas(flagMatch) {

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

function corregirAltura() {
    containerIndex.classList.remove('container-index_selec');
    containerIndex.classList.add('container-index_selec');
}

// Botón Europa del nav
europaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "Europa");
    matchBanderas(flagMatch);

    borrarSelecionado();
    europaBtn.classList.add('nav-seleccionado');

    corregirAltura();
});

// Botón África del nav
africaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "Africa");
    matchBanderas(flagMatch);

    borrarSelecionado();
    africaBtn.classList.add('nav-seleccionado');

    corregirAltura();
});


// Botón Asia del nav
asiaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "Asia");
    matchBanderas(flagMatch);

    borrarSelecionado();
    asiaBtn.classList.add('nav-seleccionado');

    corregirAltura();
});


// Botón América del nav
americaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "America");
    matchBanderas(flagMatch);

    borrarSelecionado();
    americaBtn.classList.add('nav-seleccionado');

    corregirAltura();
});


// Botón Oceanía del nav
oceaniaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = banderas.filter(({ continente }) => continente === "Oceania");
    matchBanderas(flagMatch);

    borrarSelecionado();
    oceaniaBtn.classList.add('nav-seleccionado');

    corregirAltura();
});


