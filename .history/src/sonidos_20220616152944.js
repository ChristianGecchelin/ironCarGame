const musicaMenu = new Audio("./audios/menu.mp3");

const reproducirMusica = () => {
  musicaMenu.currentTime = 0;
  musicaMenu.volume = 0.3;
  musicaMenu.loop = true;
  musicaMenu.play();
};
