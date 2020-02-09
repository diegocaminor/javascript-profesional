import MediaPlayer from './media-player.js'
import AutoPlay from './plugins/autoplay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay
    ]
});

const buttonPlay = document.querySelector('#button-play');
const buttonMute = document.querySelector('#button-mute');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();