import MediaPlayer from './MediaPlayer.js';
import Autoplay from './plugins/Autoplay.js';

const video = document.querySelector('video');
const button = document.querySelector('button');
const btnMute = document.querySelector('#mute');

const player = new MediaPlayer({ el: video, plugins: [new Autoplay()] });

button.onclick = () => {
  video.paused ? player.play() : player.pause();
};

btnMute.onclick = () => {
  if (video.muted) {
    btnMute.textContent = 'Mute';
    player.unmute();
  } else {
    btnMute.textContent = 'Unmute';
    player.mute();
  }
  // video.muted ? player.unmute() : player.mute();
};
