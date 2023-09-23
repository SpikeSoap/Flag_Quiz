/**
 * Hacer un primer ejercicio donde simplemente hago que se carguen todas las banderas
 */

let paises = [{ id: 1, bandera: "../images/bandera1.gif", nombre: "Estonia", capital: "Tallín", continente: "Europa" },
{ id: 2, bandera: "../images/bandera2.gif", nombre: "Armenia", capital: "Ereván", continente: "Europa" },
{ id: 3, bandera: "../images/bandera3.gif", nombre: "Azerbaiyán", capital: "Bakú", continente: "Europa" },
{ id: 4, bandera: "../images/bandera4.gif", nombre: "Comoras", capital: "Moroni", continente: "Africa" },
{ id: 5, bandera: "../images/bandera5.gif", nombre: "Zimbabue", capital: "Harare", continente: "Africa" },
{ id: 6, bandera: "../images/bandera6.gif", nombre: "Suazilandia", capital: "Esuatini", continente: "Africa" },
{ id: 7, bandera: "../images/bandera7.gif", nombre: "Afganistan", capital: "Kabul", continente: "Asia" },
{ id: 8, bandera: "../images/bandera8.gif", nombre: "Bután", capital: "Timbu", continente: "Asia" },
{ id: 9, bandera: "../images/bandera9.gif", nombre: "Brunei", capital: "Bandar Seri Begawan", continente: "Asia" },
{ id: 10, bandera: "../images/bandera10.gif", nombre: "Las Granadinas", capital: "Kinstown", continente: "America" },
{ id: 11, bandera: "../images/bandera11.gif", nombre: "bonaire", capital: "Kralendijk", continente: "America" },
{ id: 12, bandera: "../images/bandera12.gif", nombre: "aruba", capital: "Oranjestad", continente: "America" },
{ id: 13, bandera: "../images/bandera13.gif", nombre: "Nauru", capital: "Yaren", continente: "Oceania" },
{ id: 14, bandera: "../images/bandera14.gif", nombre: "Tokelau", capital: "Atafu", continente: "Oceania" },
{ id: 15, bandera: "../images/bandera15.gif", nombre: "Vanuatu", capital: "Port Vila", continente: "Oceania" },

];

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
    for (let i = 0; i < paises.length; i++) {
        let artBandera = document.createElement('article');
        artBandera.className = "artBandera";
        cargaBanderas.append(artBandera);

        let titleBandera = document.createElement('h3');
        titleBandera.innerText = paises[i].nombre;
        artBandera.appendChild(titleBandera);

        let flag = document.createElement('img');
        flag.src = paises[i].bandera;
        flag.className = "flag";
        artBandera.appendChild(flag);

        let capital = document.createElement('p');
        capital.innerText = paises[i].capital;
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

// Botón Europa del nav
europaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = paises.filter(({ continente }) => continente === "Europa");
    matchBanderas(flagMatch);
   
});

// Botón África del nav
africaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = paises.filter(({ continente }) => continente === "Africa");
    matchBanderas(flagMatch);
});


// Botón Asia del nav
asiaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = paises.filter(({ continente }) => continente === "Asia");
    matchBanderas(flagMatch);
});


// Botón América del nav
americaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = paises.filter(({ continente }) => continente === "America");
    matchBanderas(flagMatch);
});


// Botón Oceanía del nav
oceaniaBtn.addEventListener("click", () => {
    borrarBanderas();
    let flagMatch = paises.filter(({ continente }) => continente === "Oceania");
    matchBanderas(flagMatch);
});


// Parte en la que se carga una modal

