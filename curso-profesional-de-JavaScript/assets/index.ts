import MediaPlayer from './MediaPlayer';
import Autoplay from './plugins/Autoplay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');

const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay(), new AutoPause()],
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton:HTMLElement = document.querySelector('#muteButton');
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .catch((error) => console.error(error));
}
console.log('hola');
