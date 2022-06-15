let mainSound = new Audio("./audios/carrera.mp3");
mainSound.volume = 0.3;
mainSound.duration = 30;

inicioCarrera = () => {
  mainSound.play();
};
detenerSonido = () => {
  mainSound.paused();
};
