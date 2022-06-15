const musica = new Audio("./audios/menu.mp3");
let mainSound = new Audio("./audios/carrera.mp3");
let musicaPrincipal = document.querySelector(".musica");
console.log(musicaPrincipal);
const inicioCarrera = () => {
  mainSound.volume = 0.6;
  mainSound.duration = 30;
  mainSound.loop = true;
  mainSound.play();
};
const reproducirMusica = () => {
  debugger;
  musica.currentTime = 0;
  musica.volume = 0.5;
  musica.loop = true;
  musica.play();
};
detenerSonido = () => {
  mainSound.paused();
};
musicaPrincipal.addEventListener("click", inicioCarrera);
