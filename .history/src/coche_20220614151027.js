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
  constructor(x, y, ancho, alto, imagen, ctx, lives, fuel) {
    super(x, y, ancho, alto, imagen, ctx);
    this.step = Objeto.step + 2;
    this.lives = lives;
    this.fuel = fuel;
  }
  detectarColision(objeto) {
    if (
      this.x >= objeto.x &&
      this.x + this.ancho <= objeto.x + objeto.ancho &&
      this.y <= objeto.y + objeto.alto &&
      this.y >= objeto.y
    ) {
      console.log("colision frontal");
    }
  }

  moverPlayer = (e) => {
    if (e.code === "ArrowLeft" && player.x > 50) {
      player.x -= player.step;
    }
    if (e.code === "ArrowRight" && player.x < 400) {
      player.x += player.step;
    }
    if (e.code === "ArrowUp" && player.y > 0) {
      player.y -= player.step;
    }
    if (e.code === "ArrowDown" && player.y < 600) {
      player.y += player.step;
    }
  };
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
