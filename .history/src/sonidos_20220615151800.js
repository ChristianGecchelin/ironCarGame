detenerSonido = () => {
  mainSound.paused();
};

const reproducirMusica = (musica) => {
  debugger;
  musica.currentTime = 0;
  musica.volume = 1;
  musica.loop = true;
  musica.play();
};
