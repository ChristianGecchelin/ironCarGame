let points = 0;
let info = document.querySelector(".info");
let infoContainer = document.querySelector(".info-container");
let fuel = document.createElement("p");
fuel.setAttribute("class", "information");
info.appendChild(fuel);
let lives = document.createElement("p");
lives.setAttribute("class", "information");
info.appendChild(lives);
let puntuacion = document.createElement("p");
puntuacion.setAttribute("class", "information");
info.appendChild(puntuacion);
fuel.innerText = `Fuel: 100`;
lives.innerText = `Lives: 3`;
puntuacion.innerText = `${points} Puntos`;
/* let mu = document.createElement("img");
mu.setAttribute("class", "musica");
mu.setAttribute("src", "./images/altavoz.png");
infoContainer.appendChild(mu); */
let gameOver = document.querySelector(".game-over");

let puntuacionFinal = document.querySelector("#score");
puntuacionFinal.innerText = `Puntuación Final ~ ${points}`;
