let mainSound = new Audio("./audios/carrera.mp3");
mainSound.volume = 10;
mainSound.duration = 30;

inicioCarrera = () => {
  mainSound.play();
};
