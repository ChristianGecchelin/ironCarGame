const musica = new Audio("./audios/menu.mp3");

const reproducirMusica = () => {
  musica.currentTime = 0;
  musica.volume = 0.5;
  musica.loop = true;
  musica.play();
};
