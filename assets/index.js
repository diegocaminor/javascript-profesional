import MediaPlayer from './media-player.js'
import AutoPlay from './plugins/autoplay.js'
import AutoPause from './plugins/autopause.ts'

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ]
});

const buttonPlay = document.querySelector('#button-play');
const buttonMute = document.querySelector('#button-mute');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message);
    })
}