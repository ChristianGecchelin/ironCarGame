const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
//Sonidos
let mainSound = new Audio("./audios/carrera.mp3");

const inicioCarrera = () => {
  mainSound.volume = 0.6;
  mainSound.duration = 30;
  mainSound.loop = true;
  mainSound.play();
};
const detenerSonido = (sonido) => {
  sonido.muted = true;
};

//Creo elementos en canvas
let objects = [];
let cochePlayer = new Image();
cochePlayer.src = "./images/car.png";

const player = new Objeto(3, 250, 600, 60, 100, cochePlayer, ctx, 7, 100);

let enemyImage = new Image();
enemyImage.src = "./images/car2.png";

let bossImage = new Image();
bossImage.src = "./images/inicio.png";

let ambulanceImage = new Image();
ambulanceImage.src = "./images/ambulance.png";

const createEnemies = () => {
  let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
  if (randomNumber === 3) {
    const boss = new Objeto(
      4,
      Math.floor(Math.random() * (400 - 50) + 50),
      0,
      60,
      100,
      bossImage,
      ctx,
      Math.floor(Math.random() * (30 - 25) + 25),
      1000
    );
    objects.push(boss);
  } else if (randomNumber >= 3) {
    const enemy = new Objeto(
      1,
      Math.floor(Math.random() * (400 - 50) + 50),
      0,
      60,
      100,
      enemyImage,
      ctx,
      Math.floor(Math.random() * (15 - 10) + 10),
      1000
    );
    objects.push(enemy);
  } else {
    const ambulance = new Objeto(
      2,
      Math.floor(Math.random() * (400 - 50) + 50),
      0,
      60,
      100,
      ambulanceImage,
      ctx,
      Math.floor(Math.random() * (12 - 10) + 10),
      1000
    );
    objects.push(ambulance);
  }
};

//Funcion que hace funcionar el juego
const jugar = () => {
  inicioCarrera();
  for (let enemy of objects) {
    enemy.borrar();
    enemy.y += enemy.step;
    enemy.dibujar();
    player.detectarColision(enemy);
  }
};
let jugando = true;
const detenerJuego = () => {
  debugger;
  if (!jugando) {
    clearInterval(sumarPuntos);
    clearInterval(jugar);
    clearInterval(reducirFuel);
  }
};

const moverPlayer = (e) => {
  player.borrar();
  if (e.key === "ArrowLeft" && player.x > 50) {
    player.x -= player.step;
  }
  if (e.key === "ArrowRight" && player.x < 400) {
    player.x += player.step;
  }
  if (e.key === "ArrowUp" && player.y > 0) {
    player.y -= player.step;
  }
  if (e.key === "ArrowDown" && player.y < 600) {
    player.y += player.step;
  }
  player.dibujar();
};
const sumarPuntos = () => {
  player.points += 100;
  puntuacion.innerText = `${player.points} Puntos`;
};
const reducirFuel = () => {
  if (player.fuel > 0) {
    player.fuel -= 5;
  } else {
    debugger;
    detenerSonido(mainSound);
    jugando = false;
    detenerJuego();
    puntuacionFinal.innerText = `Puntuación Final ~ ${player.points}`;
    gameOver.classList.remove("hidden");
  }
  fuel.innerText = `Fuel: ${player.fuel}`;
};

//Funcion que se ejecuta con la carga de pagina
const cargaInicial = () => {
  player.dibujar();
  setInterval(jugar, 50);
  setInterval(createEnemies, 1250);
  setInterval(sumarPuntos, 2000);
  setInterval(reducirFuel, 1000);
};

window.addEventListener("load", cargaInicial);
document.addEventListener("keydown", moverPlayer);
