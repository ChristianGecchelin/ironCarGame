const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let image = new Image();
image.onload = function () {
  ctx.drawImage(image, 0, 0, 500, 700);
};
image.src = "../images/road.png";
image.style.backgroundSize = "cover";
console.log(image);

let cochePlayer = new Image();
cochePlayer.src = "..images/car.png";
