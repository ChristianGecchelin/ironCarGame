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
lives.innerText = "Lives: ❤❤❤";
puntuacion.innerText = "xx Puntos";
