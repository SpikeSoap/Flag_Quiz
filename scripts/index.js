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

const cargaBanderas = document.getElementsByClassName("carga-banderas")[0];


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


document.addEventListener('DOMContentLoaded', () => {
  
    cargarBanderas();

});

const logo = document.querySelector(".header-index_figure_img");

function borrarBanderas(){

    cargaBanderas.innerHTML = "";

}

//Cargar todas las banderas cuando click en la imágen del logo
logo.addEventListener("click", ()=>{

    borrarBanderas();

    cargarBanderas();
});

// Europa
const europaBtn = document.querySelector(".europa-btn");

europaBtn.addEventListener("click", () => {

    // Borramos las banderas que previamente están cargadas 
    cargaBanderas.innerHTML = "";

    let flagMatch = paises.filter(({ continente }) => continente === "Europa");

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
});

// África
const africaBtn = document.querySelector(".africa-btn");

africaBtn.addEventListener("click", () => {

    // Borramos las banderas que previamente están cargadas 
    cargaBanderas.innerHTML = "";

    let flagMatch = paises.filter(({ continente }) => continente === "Africa");

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
});


// Asia
const asiaBtn = document.querySelector(".asia-btn");

asiaBtn.addEventListener("click", () => {

    // Borramos las banderas que previamente están cargadas 
    cargaBanderas.innerHTML = "";

    let flagMatch = paises.filter(({ continente }) => continente === "Asia");

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
});


// América
const americaBtn = document.querySelector(".america-btn");

americaBtn.addEventListener("click", () => {

    // Borramos las banderas que previamente están cargadas 
    cargaBanderas.innerHTML = "";

    let flagMatch = paises.filter(({ continente }) => continente === "America");

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
});


// Oceanía
const oceaniaBtn = document.querySelector(".oceania-btn");

oceaniaBtn.addEventListener("click", () => {

    // Borramos las banderas que previamente están cargadas 
    cargaBanderas.innerHTML = "";

    let flagMatch = paises.filter(({ continente }) => continente === "Oceania");

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
});
