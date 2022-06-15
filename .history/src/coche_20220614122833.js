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

class Player extends Objeto {
  constructor(x, y, ancho, alto, imagen, lives, fuel, ctx) {
    super(x, y, ancho, alto, imagen, ctx);
    this.step = Objeto.step + 2;
    this.lives = lives;
    this.fuel = fuel;
  }
  detectarColision() {
    if (this.x >= objeto.x && this.x <= objeto.x + objeto.ancho) {
      console.log("colision");
    }
  }
}
class BossEnemy extends Objeto {
  constructor(x, y, ancho, alto, imagen, ctx) {
    super(x, y, ancho, alto, imagen, ctx);
  }
  movimiento() {
    this.borrar();
    this.x = this.x - this.step;
    this.dibujar();
    this.borrar();
    this.x = this.x + this.step;
    this.dibujar();
  }
}
