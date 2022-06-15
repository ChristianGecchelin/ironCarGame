const musica = new Audio("./audios/menu.mp3");

const inicioCarrera = () => {
  mainSound.volume = 0.6;
  mainSound.duration = 30;
  mainSound.loop = true;
  mainSound.play();
};
const reproducirMusica = () => {
  musica.currentTime = 0;
  musica.volume = 0.5;
  musica.loop = true;
  musica.play();
};
detenerSonido = () => {
  mainSound.paused();
};
