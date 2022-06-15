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
image.style.backgroundSize = "cover";

let cochePlayer = new Image();
cochePlayer.src = "../images/car.png";
const player = new Objeto(250, 600, 60, 100, cochePlayer, ctx);
let enemyImage = new Image();
enemyImage.src = "../images/car2.png";
const enemy = new Objeto(
  Math.floor(Math.random() * (400 - 50) + 50),
  0,
  60,
  100,
  enemyImage,
  ctx
);

const cargaInicial = () => {
  player.dibujar();
  for (let x = 0; x < 4; x++) {
    enemy.dibujar();
  }
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
  window.requestAnimationFrame(moverCoche);
};
window.addEventListener("load", cargaInicial);
window.addEventListener("keydown", moverCoche);
