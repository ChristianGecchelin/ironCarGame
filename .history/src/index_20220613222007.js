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
const player = new Objeto(250, 0, 60, 60, cochePlayer, ctx);
console.log(player);

const cargaInicial = () => {
  player.dibujar();
};
