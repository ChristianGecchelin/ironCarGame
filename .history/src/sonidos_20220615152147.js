detenerSonido = () => {
  mainSound.paused();
};

const musica = new Audio("./audios/menu.mp3");

const reproducirMusica = (e) => {
  console.log(musica);
  e.preventDefault();
  musica.currentTime = 0;
  musica.volume = 1;
  musica.loop = true;
  musica.play();
};
