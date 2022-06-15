detenerSonido = () => {
  mainSound.paused();
};

const musica = new Audio("./audios/menu.mp3");

const reproducirMusica = () => {
  musica.loop = true;
  return musica.play();
};
