let image = new Image();
image.src = "../images/road.png";
const backgroundImage = {
  img: image,
  y: 600,
  speed: -10,

  move: function () {
    this.y -= this.speed;
    this.y %= canvas.height;
  },

  draw: function () {
    ctx.drawImage(this.img, 0, 0, 500, 700);
    /* if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y - canvas.height, 500, 700);
    } else {
      ctx.drawImage(this.img, 0, this.y + canvas.height, 500, 700);
    } */
  },
};
