const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let enemies = [];

let cochePlayer = new Image();
cochePlayer.src = "../images/car.png";

const player = new Player(250, 600, 60, 100, cochePlayer, ctx);
console.log(player);
let enemyImage = new Image();
enemyImage.src = "../images/car2.png";

const jugar = () => {
  player.borrar();
  moverPlayer();
  backgroundImage.draw();
  player.dibujar();
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
  backgroundImage.draw();
  player.dibujar();
  setInterval(jugar, 50);
  setInterval(createEnemies, 5000);
};

window.addEventListener("load", cargaInicial);
document.addEventListener(
  "keydown",
  (moverPlayer = (e) => {
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
  })
);
