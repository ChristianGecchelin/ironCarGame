const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let enemies = [];

let cochePlayer = new Image();
cochePlayer.src = "./images/car.png";

const player = new Objeto(250, 600, 60, 100, cochePlayer, ctx);

let enemyImage = new Image();
enemyImage.src = "./images/car2.png";

const jugar = () => {
  for (let enemy of enemies) {
    enemy.borrar();
    enemy.y += enemy.step;
    enemy.dibujar();
    player.detectarColision(enemy);
  }
};

const createEnemies = () => {
  const enemy = new Objeto(
    Math.floor(Math.random() * (400 - 50) + 50),
    0,
    60,
    100,
    enemyImage,
    ctx
  );
  enemies.push(enemy);
  console.log(enemies);
};

const sumarPuntos = () => {
  player.points += 100;
  puntuacion.innerText = `${player.points} Puntos`;
};

const cargaInicial = () => {
  player.dibujar();
  setInterval(jugar, 50);
  setInterval(createEnemies, 1500);
  setInterval(sumarPuntos, 2000);
  inicioCarrera();
};

let mainSound = new Audio("./audios/carrera.mp3");
mainSound.volume = 0.6;
mainSound.duration = 30;

inicioCarrera = () => {
  mainSound.play();
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

window.addEventListener("load", cargaInicial);
document.addEventListener("keydown", moverPlayer);
