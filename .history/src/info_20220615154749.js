let points = 0;
let info = document.querySelector(".info");
let fuel = document.createElement("p");
fuel.setAttribute("class", "information");
info.appendChild(fuel);
let lives = document.createElement("p");
lives.setAttribute("class", "information");
info.appendChild(lives);
let puntuacion = document.createElement("p");
puntuacion.setAttribute("class", "information");
info.appendChild(puntuacion);
fuel.innerText = "Fuel: 😎-🤨-😣";
lives.innerText = `Lives: ♥ ♥ ♥`;
puntuacion.innerText = `${points} Puntos`;
let mu = document.createElement("img");
mu.setAttribute("class", "musica");
mu.setAttribute("src", "../images/altavoz.png");
info.appendChild(mu);
