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

//Creo enemigos
let enemies = [];
let cochePlayer = new Image();
cochePlayer.src = "./images/car.png";

const player = new Objeto(250, 600, 60, 100, cochePlayer, ctx);

let enemyImage = new Image();
enemyImage.src = "./images/car2.png";

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
};

//Funcion que hace funcionar el juego
const jugar = () => {
  inicioCarrera();
  for (let enemy of enemies) {
    enemy.borrar();
    enemy.y += enemy.step;
    enemy.dibujar();
    player.detectarColision(enemy);
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

const aumentarDificultad = () => {
  enemy.step += 5;
};

const sumarPuntos = () => {
  player.points += 100;
  puntuacion.innerText = `${player.points} Puntos`;
};

//Funcion que se ejecuta con la carga de pagina
const cargaInicial = () => {
  player.dibujar();
  setInterval(jugar, 50);
  setInterval(createEnemies, 1500);
  setInterval(sumarPuntos, 2000);
};

window.addEventListener("load", cargaInicial);
document.addEventListener("keydown", moverPlayer);
