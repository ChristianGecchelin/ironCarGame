const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let image = new Image();
image.onload = function () {
  ctx.drawImage(image, 0, 0, 100, 100);
};
image.src = "../images/road.png";
image.style.backgroundSize = "cover";
console.log(image);
