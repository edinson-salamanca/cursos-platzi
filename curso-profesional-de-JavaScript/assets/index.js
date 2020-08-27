import MediaPlayer from './MediaPlayer.js';
import Autoplay from './plugins/Autoplay.js';

const video = document.querySelector('video');

const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay()],
});

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    muteButton.textContent = 'Mute';
    player.unmute();
  } else {
    muteButton.textContent = 'Unmute';
    player.mute();
  }
  // video.muted ? player.unmute() : player.mute();
};
