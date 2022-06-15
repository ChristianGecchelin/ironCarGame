const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let enemies = [];

let cochePlayer = new Image();
cochePlayer.src = "../images/car.png";

const player = new Objeto(250, 600, 60, 100, cochePlayer, ctx);
console.log(player);
let enemyImage = new Image();
enemyImage.src = "../images/car2.png";

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
};

const cargaInicial = () => {
  player.dibujar();
  setInterval(jugar, 50);
  setInterval(createEnemies, 5000);
};
const moverPlayer = (e) => {
  console.log(e);

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
