class Objeto {
  constructor(x, y, ancho, alto, imagen, ctx) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
    this.ctx = ctx;
    this.step = 7;
    this.points = 0;
    this.lives = 3;
  }

  dibujar() {
    ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  borrar() {
    ctx.clearRect(this.x, this.y, this.ancho, this.alto);
  }
  detectarColision(objeto) {
    if (
      this.x < objeto.x + objeto.ancho &&
      this.x + this.ancho > objeto.x &&
      this.y < objeto.y + objeto.alto &&
      this.alto + this.y > objeto.y
    ) {
      const enemyIndex = enemies.indexOf(objeto);
      enemies.splice(enemyIndex, 1);
      objeto.borrar();

      if (this.lives > 1) {
        this.lives--;
        if (this.lives === 3) {
          lives.innerText = `Lives: ♥ ♥ ♥`;
        } else if (this.lives === 2) {
          lives.innerText = `Lives: ♥ ♥`;
        } else {
          lives.innerText = `Lives: ♥`;
        }
      } else {
        detenerSonido(mainSound);
        alert("CuloRoto");
      }
    } else if (objeto.y > 600) {
      const enemyIndex = enemies.indexOf(objeto);
      enemies.splice(enemyIndex, 1);
      objeto.borrar();
    }
  }
}

/* class Player extends Objeto {
  constructor(x, y, ancho, alto, imagen, ctx, lives, fuel) {
    super(x, y, ancho, alto, imagen, ctx);
    this.step = Objeto.step + 2;
    this.lives = lives;
    this.fuel = fuel;
  }
  dibujar() {
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
} */
/* class BossEnemy {
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
} */
