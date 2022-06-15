let info = document.querySelector(".info");
let fuel = document.createElement("p");
fuel.setAttribute("class", "information");
info.appendChild(fuel);
let lives = document.createElement("p");
lives.setAttribute("class", "information");
info.appendChild(lives);
fuel.innerText = "Fuel: 😎-🤨-😣";
lives.innerText = "Lives: ❤❤❤";
