const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
class Objeto {
  constructor(x, y, ancho, alto, imagen, ctx) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
    this.ctx = ctx;
    this.step = 7;
  }

  dibujar() {
    ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  borrar() {
    ctx.clearRect(this.x, this.y, this.ancho, this.alto);
  }
}

let image = new Image();
image.onload = function () {
  ctx.drawImage(image, 0, 0, 500, 700);
};
image.src = "../images/road.png";
const backgroundImage = {
  img: image,
  y: 0,
  speed: -1,

  move: function () {
    this.y += this.speed;
    this.y %= canvas.height;
  },

  draw: function () {
    ctx.drawImage(this.img, this.y, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.y + canvas.height, 0);
    } else {
      ctx.drawImage(this.img, this.y - this.img.height, 0);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
image.onload = updateCanvas;
let enemies = [];
let cochePlayer = new Image();
cochePlayer.src = "../images/car.png";
const player = new Objeto(250, 600, 60, 100, cochePlayer, ctx);
let enemyImage = new Image();
enemyImage.src = "../images/car2.png";
const jugar = () => {
  for (let enemy of enemies) {
    enemy.borrar();
    enemy.y += enemy.step;
    enemy.dibujar();
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
  setInterval(createEnemies, 1200);
};
const moverCoche = (e) => {
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
window.addEventListener("keydown", moverCoche);
