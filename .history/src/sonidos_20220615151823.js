detenerSonido = () => {
  mainSound.paused();
};

const musica = new Audio("./audios/menu.mp3");

const reproducirMusica = (musica) => {
  debugger;
  musica.currentTime = 0;
  musica.volume = 1;
  musica.loop = true;
  musica.play();
};
