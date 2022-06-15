detenerSonido = () => {
  mainSound.paused();
};

const musica = new Audio("./audios/menu.mp3");

const reproducirMusica = () => {
  musica.loop = true;
  musica.play();
};
Object.addEventListener("click", reproducirMusica());
