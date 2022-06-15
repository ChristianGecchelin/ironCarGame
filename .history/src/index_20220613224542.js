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
console.log(image);

let cochePlayer = new Image();
cochePlayer.src = "../images/car.png";
const player = new Objeto(250, 600, 60, 100, cochePlayer, ctx);
console.log(player);

const cargaInicial = () => {
  player.dibujar();
};
const moverCoche = (e) => {
  player.borrar();
  if (e.key === "ArrowLeft" && player.x > 50) {
    player.x -= player.step;
  }
  if (e.key === "ArrowRight" && player.x < 400) {
    player.x += player.step;
  }
  if (e.key === "ArrowUp" && player.y < 700) {
    player.y -= player.step;
  }
  if (e.key === "ArrowDown" && player.y > 100) {
    player.y += player.step;
  }
  player.dibujar();
  console.log(player.y);
};
window.addEventListener("load", cargaInicial);
window.addEventListener("keydown", moverCoche);
