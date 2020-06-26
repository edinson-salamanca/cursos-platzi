function Autoplay() {}

Autoplay.prototype.run = function (player) {
/*   player.mute(); */
  player.play();
  /* player.unmute(); */
};
export default Autoplay;
