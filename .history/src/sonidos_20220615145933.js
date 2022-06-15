detenerSonido = () => {
  mainSound.paused();
};

const musica = new Audio("./audios/menu.mp3");

const reproducirMusica = () => {
  debugger;
  musica.loop = true;
  musica.play();
};

document.addEventListener("click", reproducirMusica);
